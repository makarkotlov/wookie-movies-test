module.exports = {
  name: 'Icons',
  inputDir: 'assets/icons',
  outputDir: 'assets/fonts',
  fontTypes: ['ttf'],
  assetTypes: ['json'],
  formatOptions: {
    json: {
      indent: 2,
    },
  },
  pathOptions: {
    json: 'src/@constants/icons.json',
  },
};
