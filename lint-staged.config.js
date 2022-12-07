module.exports = {
  '*.{css,scss,vue,js,ts,json}': 'prettier --write',
  '*.{css,scss,vue,less,vue}': 'stylelint --fix',
  'src/**/*.{js,ts,vue}': 'eslint --fix'
}
