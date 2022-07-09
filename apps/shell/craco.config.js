const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;

module.exports = () => ({
  webpack: {
    configure: {
      output: {
        publicPath: "auto"
      }
    },
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "dashboard",
          filename: "remoteEntry.js",
          remotes: {},
          exposes: {},
          shared: {
            ...deps
          },
        })
      ],
    }
  }
});