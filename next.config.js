/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          hostname: '**.s3.amazonaws.com'
        }
      ]
    },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(graphql|gql)/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader'
      });
  
      return config;
    }
  };
  
  module.exports = nextConfig;
  