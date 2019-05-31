const crypto = require(`crypto`);
const _ = require(`lodash`);
const path = require(`path`);

function slugify(text)
{
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  try {
    const articles = await graphql(`
      {
        allArticle {
          edges {
            node {
              id
              title
              tags
            }
          }
        }
      }
    `);
    articles.data.allArticle.edges.forEach(({ node }) => {
      createPage({
        path: slugify(node.title),
        component: path.resolve(`src/templates/article.js`),
        context: {
          id: node.id
        }
      });
    });
    return Promise.resolve(articles);
  } catch (e) {
    console.error(`Error getting articles from Strapi: {$e.message}`);
    return Promise.reject(e);
  }
};

exports.onCreateNode = async ({ node, actions }) => {
  const { createNode } = actions;
  if (node.internal.type === 'StrapiArticle') {
    createNode({
      ...node,
      slug: slugify(node.title),
      id: node.id + '-markdown',
      parent: node.id,
      children: [],
      internal: {
        type: 'Article',
        mediaType: 'text/markdown',
        content: node.content,
        contentDigest: crypto
          .createHash(`md5`)
          .update(JSON.stringify(node))
          .digest(`hex`)
      }
    });
  }
};