const Merge = require('webpack-merge');
const ProdConfig = require('./webpack.prod.js');
const path = require('path');
const webpack = require('webpack');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = Merge(ProdConfig, {
  plugins: [
    new WebpackPwaManifest({
      name: 'Learning Lab',
      short_name: 'LearningLab',
      description: 'Learn one topic every month',
      orientation: "portrait",
      display: "standalone",
      start_url: "/",
      theme_color: "#1BC3B5",
      background_color: "#001D2B",
      icons: [
        {
          src: path.resolve('icon.png'),
          sizes: [96, 128, 192, 256, 384, 512]
        },
      ]
    })
  ]
});
