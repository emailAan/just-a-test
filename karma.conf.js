'use strict'

// Require webpack config rather than duplicating it
const webpackConfig = require('./webpack.config')
webpackConfig.devtool = 'inline-source-map'
delete webpackConfig.entry
delete webpackConfig.output

module.exports = function karmaConfig (config) {
  config.set({
    // ... normal karma configuration
    browsers: ['Firefox', 'Chrome', 'ChromeHeadless'],
    customLaunchers: {
      ChromeHeadless: {
        base: 'Chrome',
        flags: [
          '--no-sandbox',
          // See https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README.md
          '--headless',
          '--disable-gpu',
          // Without a remote debugging port, Google Chrome exits immediately.
          ' --remote-debugging-port=9222'
        ]
      }
    },
    singleRun: true,
    files: [
      'src/__tests__/spec/**/*.js',
      'src/__tests__/spec/**/*.jsx'
      // each file acts as entry point for the webpack configuration
    ],

    preprocessors: {
      // add webpack as preprocessor
      'src/__tests__/**/*': ['webpack']
    },
    frameworks: ['phantomjs-shim', 'jasmine'],
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    }
  })
}
