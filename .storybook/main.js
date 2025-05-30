module.exports = {
  stories: ['../src/stories/**/*.stories.js'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app'
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  core: {
    builder: 'webpack5'
  }
}