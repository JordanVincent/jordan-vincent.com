module.exports = {
  // Used by `gatsby-plugin-sitemap`
  siteMetadata: {
    title: 'Jordan Vincent',
    siteUrl: 'https://jordan-vincent.com',
  },
  plugins: [
    'gatsby-plugin-eslint',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        implementation: require('sass'),
      },
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['UA-39088123-1'],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Jordan Vincent',
        short_name: 'Jordan Vincent',
        start_url: '/',
        background_color: 'white',
        theme_color: 'white',
        display: 'standalone',
        icon: 'src/assets/icon.png',
      },
    },
  ],
};
