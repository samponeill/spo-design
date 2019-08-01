const { apiEndpoint } = require('./prismic-configuration');
var repo = /([^\/]+)\.prismic\.io/.exec(apiEndpoint);
var token = apiEndpoint.accessToken;

module.exports = {
  siteMetadata: {
    title: `Coffee Shop Demo`,
    description: `Gatsby + Prismic!`,
    author: `@raulg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-prismic-graphql`,
      options: {
        repositoryName: repo[1],
        path: '/preview',
        previews: true,
        accessToken: token,
        pages: [{
          type: 'Case_study',
          match: '/work/:uid',
          path: '/work',
          component: require.resolve('./src/templates/product.js')
        },{
          type: 'Blog_post',
          match: '/blog/:uid',
          path: '/blogpost',
          component: require.resolve('./src/templates/blogPost.js')
        },{
          type: 'Content',
          match: '/:uid',
          path: '/',
          component: require.resolve('./src/templates/content.js')
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
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-sharp`, `gatsby-plugin-sharp`    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
