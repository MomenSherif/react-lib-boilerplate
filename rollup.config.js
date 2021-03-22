import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import multiInput from 'rollup-plugin-multi-input';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import copy from 'rollup-plugin-copy';
import del from 'rollup-plugin-delete';


export default [
  {
    input: ['src/**/*.tsx', 'src/**/index.ts'],
    output: [
      {
        dir: 'dist',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      multiInput({
        relative: 'src/',
      }),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      postcss({
        modules: true,
        plugins: [autoprefixer(), cssnano()],
      }),
      typescript({
        useTsconfigDeclarationDir: true,
      }),
      terser(),
    ],
  },
  {
    input: 'src/styles.scss',
    output: {
      file: 'dist/style.css',
    },
    plugins: [
      postcss({
        extract: true,
        plugins: [autoprefixer(), cssnano()],
      }),
      copy({
        targets: [
          {
            src: ['src/_variables.scss'],
            dest: 'dist',
          },
        ],
      }),
      del({ targets: ['dist/**/*.test.*', 'dist/**/*.stories.*'] }),
    ],
  },
];
