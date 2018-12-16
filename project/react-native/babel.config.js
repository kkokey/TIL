module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      ['module:metro-react-native-babel-preset'],
      'babel-preset-expo'
    ],
    plugins: [
      '@babel/plugin-transform-runtime',
      ['@babel/plugin-transform-flow-strip-types'],
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-proposal-class-properties', { loose: true }]
    ],
  };
};
