/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`);
const crypto = require(`crypto`);
const _ = require(`lodash`);
const { paginate } = require(`gatsby-awesome-pagination`);
const { createFilePath } = require("gatsby-source-filesystem")
const paginationPath = (path, page, totalPages) => {
  if (page === 0) {
    return path
  } else if (page < 0 || page >= totalPages) {
    return ''
  } else {
    return `${path}/${page + 1}`
  }
}

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
    allStrapiArticle(draft: {eq: 0}, sort: {fields: created_at, order: DESC}) {
      edges {
        node {
          id
          title
        }
      }
    }
  }
  `).then(result => {
    const posts = result.data.allStrapiArticle.edges;
    const postsPerPage = 3
    const numPages = Math.ceil(posts.length / postsPerPage)    
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
    paginate({
      createPage, // The Gatsby `createPage` function
      items: posts, // An array of objects
      itemsPerPage: postsPerPage, // How many items you want per page
      pathPrefix: '/blog', // Creates pages like `/blog`, `/blog/2`, etc
      component: path.resolve('src/templates/blog.js'), // Just like `createPage()`
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
    getPages,
  ]) 
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `allStrapiArticle`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      node,
      value,
    })
  }
}