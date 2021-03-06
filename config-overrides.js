/* eslint-disable no-param-reassign */
const path = require('path');

module.exports = function override(config) {
  config.resolve.alias = Object.assign(config.resolve.alias, {
    '@components': path.resolve(`${__dirname}/src/components`),
    '@redux': path.resolve(`${__dirname}/src/redux`),
    '@layouts': path.resolve(`${__dirname}/src/layouts`),
    '@pages': path.resolve(`${__dirname}/src/pages`),
    '@styles': path.resolve(`${__dirname}/src/styles`),
    '@constants': path.resolve(`${__dirname}/src/constants`),
    '@assets': path.resolve(`${__dirname}/src/assets`),
    '@hocs': path.resolve(`${__dirname}/src/hocs`),
    '@providers': path.resolve(`${__dirname}/src/providers`),
    '@lang': path.resolve(`${__dirname}/src/lang`),
    '@hooks': path.resolve(`${__dirname}/src/hooks`),
    '@types': path.resolve(`${__dirname}/src/types`),
  });

  return config;
};
