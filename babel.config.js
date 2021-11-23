/**
 * babel.config.js
 * Project-wide babel config to extend what's built into NextJS
 * See https://nextjs.org/docs/advanced-features/customizing-babel-config
 */

module.exports = {
  presets: [
    [
      'next/babel',
      {
        // https://emotion.sh/docs/css-prop#babel-preset
        'preset-react': {
          runtime: 'automatic', // opt-in to the new JSX transform
          importSource: '@emotion/react',
        },
      },
    ],
  ],
  plugins: [
    [
      '@emotion/babel-plugin',
      {
        // sourceMap is on by default but source maps are dead code eliminated in production
        sourceMap: true,
        autoLabel: 'always', // default: "dev-only"
        labelFormat: '[local]',
        cssPropOptimization: true,
      },
    ],
  ],
};
