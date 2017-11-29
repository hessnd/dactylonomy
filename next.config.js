module.exports = {
  webpack: (config, { dev }) => {
    const eslinter = {
      test: /\.jsx?$/,
      enforce: 'pre',
      loader: 'eslint-loader',
      exclude: /node_modules/,
      options: {
        emitWarning: dev,
        emitError: dev,
      },
    };
    config.module.rules.unshift(eslinter);
    return config;
  },
};
