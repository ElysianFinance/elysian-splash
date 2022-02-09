/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');
const webpack = require("webpack");

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    plugins: [
      new webpack.ProvidePlugin({
          Buffer: [require.resolve("buffer/"), "Buffer"],
      }),
    ],
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      fallback: {
        "crypto": false,
        "stream": require.resolve("stream-browserify"),
        "assert": false,
        "util": false,
        "http": false,
        "https": false,
        "os": false
    },
    },
  });
};
 