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

export default [
  {
    input: [
      'src/components/**/*.tsx',
      'src/components/**/index.ts',
      '!src/components/**/*.test.tsx',
      '!src/components/**/*.stories.tsx',
    ],
    output: [
      {
        dir: 'dist',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      multiInput({
        relative: 'src/components',
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
      file: 'dist/styles.css',
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
    ],
  },
];
