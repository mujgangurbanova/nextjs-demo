/** @type {import('next').NextConfig} */
// next.config.js
module.exports = {
    webpack: (config, { webpack }) => {
      config.module.rules.push({
        test: /\.less$/,
        use: [
          {
            // loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'less-loader',
          },
        ],
      });
  
      return config;
    },
  };
  