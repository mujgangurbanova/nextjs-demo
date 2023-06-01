/** @type {import('next').NextConfig} */

const path = require('path');
module.exports = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

  