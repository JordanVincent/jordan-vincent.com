const path = require('path');
const config = require('./gatsby-config');

const siteMetadata = config.siteMetadata;

// Absolute imports
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

exports.createPages = async ({ actions: { createPage } }) => {
  createPage({
    path: `/`,
    component: require.resolve('./src/components/Index/index.js'),
    context: {
      siteMetadata,
    },
  });
};
