import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const isDev = process.env.NODE_ENV === 'development';

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.cjs",
        format: "cjs",
        sourcemap: true
      },
      {
        file: "dist/index.mjs",
        format: "esm",
        sourcemap: true
      }
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ 
        tsconfig: "./tsconfig.json",
        exclude: ["**/*.stories.tsx", "**/*.test.tsx"]
      }),
      postcss({
        // extract: 'styles/index.css',
        inject: true,
        modules: false,
        use: ['sass'],
        minimize: !isDev,
        sourceMap: true
      })
    ],
    external: ["react", "react-dom"]
  }
]; 