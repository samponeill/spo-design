/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`);
const crypto = require(`crypto`);
const _ = require(`lodash`);

exports.onCreateNode = async ({ node, actions }) => {
  const { createNode } = actions;
  if (node.internal.type === 'StrapiArticle') {
    createNode({
      ...node,
      slug: slugify(node.title),
      id: node.id + "-markdown",
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

function slugify(text)
{
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
};

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
  // Query for article nodes to use in creating pages.
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }

      return result;
    })
  )
});


// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const getArticles = makeRequest(graphql, `
    {
      allStrapiArticle {
        edges {
          node {
            id
            title
          }
        }
      }
    }
    `).then(result => {
    result.data.allStrapiArticle.edges.forEach(({ node }) => {
      var articleSlug = slugify(node.title);
      createPage({
        path: `/articles/${articleSlug}`,
        component: path.resolve(`src/templates/article.js`),
        context: {
          id: node.id,
          title: node.title,
        },
      })
    })
  });

  const getPages = makeRequest(graphql, `
    {
      allStrapiPage {
        edges {
          node {
            id
            title
          }
        }
      }
    }
    `).then(result => {
    result.data.allStrapiPage.edges.forEach(({ node }) => {
      var pageSlug = slugify(node.title);
      createPage({
        path: `/${pageSlug}`,
        component: path.resolve(`src/templates/page.js`),
        context: {
          id: node.id,
          title: node.title,
        },
      })
    })
  });

  const getAuthors = makeRequest(graphql, `
    {
      allStrapiUser {
        edges {
          node {
            id
            username
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each user.
    result.data.allStrapiUser.edges.forEach(({ node }) => {
      var userSlug = slugify(node.username);
      createPage({
        path: `/contributors/${userSlug}`,
        component: path.resolve(`src/templates/author.js`),
        context: {
          id: node.id,
          username: node.username,
        },
      })
    })
  });

  const getTags = makeRequest(graphql, `
    {
      allStrapiTag {
        edges {
          node {
            id
            name
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each user.
    result.data.allStrapiTag.edges.forEach(({ node }) => {
      var tagSlug = slugify(node.name);
      createPage({
        path: `/tags/${tagSlug}`,
        component: path.resolve(`src/templates/tag.js`),
        context: {
          id: node.id,
          name: node.name,
        },
      })
    })
  });  
  
  // Queries for articles and authors nodes to use in creating pages.
  return Promise.all([
    getArticles,
    getAuthors,
    getTags,
  ]) 
};

