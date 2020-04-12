const path = require("path");
const webpack = require("webpack");
const webpack_dashboard = require("webpack-dashboard/plugin");

let entry = "./src/app.js";
let bundlefile = "./bundle.js";
let publicfolder = "./public"
let mode = "development"

let config = {
    mode: mode,
    entry: entry,
    output:{
        path: path.resolve(__dirname,publicfolder),
        filename: bundlefile
    },
    plugins:[new webpack_dashboard()],
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          }
        ]
    }
}

module.exports = config