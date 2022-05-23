module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite'
  },
  staticDirs: ['../src/static'],
  async viteFinal(config) {
    return {
      ...config,
      define: {
        ...config.define,
        ...(process.env.NODE_ENV === 'production' ? {} : { global: 'window' })
      },
      esbuild: {
        ...config.esbuild
      }
    }
  }
}
