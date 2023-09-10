import { build } from "esbuild";
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
  minify: true,
};

Promise.all([
  build({
    ...baseConfig,
    format: "cjs",
  }),
  build({
    ...baseConfig,
    format: "esm",
    outExtension: {
      ".js": ".mjs",
    },
  }),
]).catch(() => process.exit(1));
