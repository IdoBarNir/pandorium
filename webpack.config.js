import path from "path";
import { fileURLToPath } from "url";

import CopyPlugin from "copy-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
  mode: "development",
  entry: "./pandorium.ts",
  target: "node20.11",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@": path.resolve(__dirname, "./"),
      "@setups": path.resolve(__dirname, "setups"),
      "@utils": path.resolve(__dirname, "utils"),
      "@config": path.resolve(__dirname, "config"),
      "@types": path.resolve(__dirname, "types"),
    },
  },
  output: {
    filename: "bundle.mjs",
    path: path.resolve(__dirname, "dist"),
    library: {
      type: "module",
    },
  },
  experiments: {
    outputModule: true,
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: ".env",
          to: "heirloom",
        },
        {
          from: "setups/express/heirloom/serverContent.ts",
          to: "heirloom/serverContent.ts",
        },
        {
          from: "supabaseConfig.ts",
          to: "heirloom/supabaseConfig.ts",
        },
      ],
    }),
  ],
};

export default config;
