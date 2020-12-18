module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap((options) => Object.assign(options, { limit: 10240 }));
  },
  css: {
    extract: false,
  },
  pwa: {
    name: 'Um and Reza Getiing Married',
    themeColor: '#ffffff',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'white',
    iconPaths: {
      favicon32: '/favicon-32x32.png',
      favicon16: '/favicon-16x16.png',
      appleTouchIcon: '/apple-touch-icon.png',
      maskIcon: '/safari-pinned-tab.svg',
      msTileImage: '/msapplication-icon-144x144.png',
    },
  },
};
