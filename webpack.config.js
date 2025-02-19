import path from "path";

export default {
   mode: "development",
   devtool: "inline-source-map",
   entry: {
      main: "./src/main.ts",
   },
   output: {
      path: path.resolve(process.cwd(), "./bin"),
      filename: "[name]-bundle.js",
   },
   resolve: {
      extensions: [".ts", ".tsx", ".js"],
   },
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            loader: "ts-loader",
         },
      ],
   },
};
