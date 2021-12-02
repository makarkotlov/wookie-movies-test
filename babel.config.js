module.exports = function (api) {
  api.cache.forever()

  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.js', '.ts', '.tsx', 'json'],
        },
      ],
    ],
  }
}
