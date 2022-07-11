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
          name: "shell",
          filename: "remoteEntry.js",
          remotes: {
            dashboard: "dashboard@https://turbin-dashboard.vercel.app/remoteEntry.js",
            messenger: "messenger@https://turbin-dashboard.vercel.app/remoteEntry.js",
            // auth: "auth@http://localhost:3002/remoteEntry.js",
            // store: "store@http://localhost:3004/remoteEntry.js"
          },
          exposes: {},
          shared: {
            ...deps
          },
        })
      ],
    }
  }
});