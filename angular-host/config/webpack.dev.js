const commonConfig = require("./webpack.common");
const { merge } = require("webpack-merge");
const angularConfig = require("../angular.json");

const PUBLIC_HOST =
  angularConfig.projects["angular-host"].architect.serve.options.publicHost;

const devConfig = {
  output: {
    publicPath: `${PUBLIC_HOST}/`,
  },
};

module.exports = merge(commonConfig, devConfig);
