/* eslint-disable import/no-extraneous-dependencies */
const Merge = require('webpack-merge');
const ProdConfig = require('./webpack.prod.js');
const path = require('path');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = Merge(ProdConfig, {
  plugins: [
    new WebpackPwaManifest({
      name: 'Learning Lab',
      short_name: 'Learning Lab',
      description: 'Learn anything in one month and aside from your work',
      orientation: 'portrait',
      display: 'standalone',
      start_url: '/',
      theme_color: '#5A51FE',
      background_color: '#5A51FE',
      icons: [
        {
          src: path.resolve('icon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
        },
      ],
    }),
  ],
});
