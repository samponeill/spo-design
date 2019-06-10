const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: 'SPO Design Co.',
    description: 'Design agency specialising in branding, marketing and websites for small businesses ',
    tagline: 'Straigtforward design for small businesses',
    author: "Sam O'Neill",
    menuLinks:[
      {
        name:'home',
        link:'/'
      },
      {
        name:'about',
        link:'/#about'
      },
      {
        name:'services',
        link:'/#services'
      }    
      ]    
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: [],
      },
    },    
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.DEPLOY_URL ? 'https://spo-design-admin.herokuapp.com' : 
        'http://localhost:1337',
        contentTypes: [ // List of the Content Types you want to be able to request from Gatsby.
          'article',
          'user',
          'tag',
          'page',
          'background',
          'logo'
        ],
        queryLimit: 1000,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,    
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}