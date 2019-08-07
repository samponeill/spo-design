const { apiEndpoint } = require('./prismic-configuration');
var repo = /([^\/]+)\.prismic\.io/.exec(apiEndpoint);

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `SPO Design Co`,
    description: `Gatsby + Prismic portfolio and blog`,
    author: `Sam O'Neill`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-prismic-graphql`,
      options: {
        repositoryName: repo[1],
        path: '/preview',
        previews: true,
        accessToken: `${process.env.API_KEY}`,
        omitPrismicScript: true,
        pages: [{
          type: 'Case_study',
          match: '/work/:uid',
          path: '/work',
          component: require.resolve('./src/templates/product.js')
        },{
          type: 'Blog_post',
          match: '/articles/:uid',
          path: '/blog',
          component: require.resolve('./src/templates/blogPost.js')
        },{
          type: 'Content',
          match: '/:uid',
          path: '/',
          component: require.resolve('./src/templates/content.js')
        },
        {
          type: 'Homepage',
          path: '/',
          component: require.resolve('./src/pages/index.js')
        },
        {
          type: 'Form',
          path: '/:uid',
          component: require.resolve('./src/templates/form.js')
        }],        
        sharpKeys: [
          /image|photo|picture/, // (default)
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
        type: 'File',
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },    
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-netlify-cache',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'spo-design-co',
        short_name: 'portfolio',
        display: 'minimal-ui',
        background_color: '#fff',
        theme_color: '#333',
        start_url: '/',
        icon: 'src/static/icon-512x512.png', // This path is relative to the root of the site.
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
