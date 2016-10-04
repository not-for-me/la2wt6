import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/area-util.js',
  dest: 'dist/app.js',
  format: 'iife',
  sourceMap: 'inline',
  moduleName: 'App',
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};

