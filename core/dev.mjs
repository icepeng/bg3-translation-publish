import { context } from "esbuild";
import pkg from "./package.json" assert { type: "json" };

const external = Object.keys({
  ...pkg.dependencies,
  ...pkg.peerDependencies,
});

const baseConfig = {
  entryPoints: ["./src/index.ts"],
  outdir: "dist",
  target: "es2019",
  bundle: true,
  sourcemap: true,
  external,
  minify: false,
};

Promise.all([
  context({
    ...baseConfig,
    format: "cjs",
  }).then((ctx) => ctx.watch()),
  context({
    ...baseConfig,
    format: "esm",
    outExtension: {
      ".js": ".mjs",
    },
  }).then((ctx) => ctx.watch()),
]).catch(() => process.exit(1));
