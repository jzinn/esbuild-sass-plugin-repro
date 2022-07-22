import Esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";

await Esbuild.build({
  bundle: true,
  entryPoints: ["app.js"],
  loader: {
    ".js": "jsx",
  },
  minify: true,
  outfile: "BUILD/static/index.js",
  plugins: [sassPlugin({ quietDeps: true })],
  publicPath: "somewhere/static",
  sourcemap: true,
  target: ["es2020"],
});
