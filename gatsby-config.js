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
    siteUrl: 'https://spo.design'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-138288323-1",
        head: true,
        anonymize: true,
        respectDNT: true,
        exclude: ["/preview/**"],
        pageTransitionDelay: 0,
      },
    },    
    {
      resolve: `gatsby-source-prismic-graphql`,
      options: {
        repositoryName: repo[1],
        path: '/preview',
        previews: true,
        accessToken: `${process.env.API_KEY}`,
        omitPrismicScript: false,
        pages: [{
          type: 'Case_study',
          path: '/work/:uid',
          component: require.resolve('./src/templates/product.js')
        },{
          type: 'Blog_post',
          path: '/articles/:uid',
          component: require.resolve('./src/templates/blogPost.js')
        },{
          type: 'Content',
          path: '/:uid',
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
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://spo.design',
        sitemap: 'https://spo.design/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
