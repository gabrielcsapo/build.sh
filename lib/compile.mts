import path, { dirname } from "path";
import webpack from "webpack";

import HtmlWebpackPlugin from "html-webpack-plugin";

import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname);

/**
 * compiles the given build configuration to a single html report
 * @param  options  - contains the necessary options for compile
 * @param  options.output  - the directory that the report will be built in
 * @param  options.config  - the build configuration object create by Pipeline
 */
export function Compile({ output, config }: { output: string; config: any }) {
  return new Promise(function (resolve, reject) {
    webpack(
      {
        entry: path.resolve(__dirname, "..", "src", "Index.tsx"),
        output: {
          path: output,
          filename: "build.js",
        },
        stats: "summary",
        context: path.resolve(__dirname, ".."),
        module: {
          rules: [
            {
              test: /\.css$/i,
              use: ["style-loader", "css-loader"],
            },
            {
              test: /\.tsx?$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: [
                    "@babel/env",
                    "@babel/react",
                    [
                      "@babel/preset-typescript",
                      { isTSX: true, allExtensions: true },
                    ],
                  ],
                },
              },
            },
          ],
        },
        resolve: {
          modules: [
            path.resolve(__dirname, "..", "node_modules"),
            "node_modules",
          ],
          extensions: [".tsx", ".ts", ".js"],
        },
        plugins: [
          new HtmlWebpackPlugin({
            template: path.resolve(
              __dirname,
              "..",
              "src",
              "template.html"
            ),
          }),
          new webpack.DefinePlugin({
            "process.env": {
              NODE_ENV: JSON.stringify("production"),
            },
            config: JSON.stringify(config),
          }),
        ],
      },
      function (err, stats) {
        if (err) {
          return reject(err);
        }
        if (stats?.compilation.errors && stats.compilation.errors.length > 0) {
          return reject(stats.compilation.errors);
        }

        return resolve("built");
      }
    );
  });
}
