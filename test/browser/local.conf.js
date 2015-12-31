
exports.config = {

  host: '127.0.0.1',
  port: 4444,

  specs: [
      './test/features/*.feature'
  ],
  exclude: [],

  cucumberOpts: {
    require: [
      './test/features/support/local.js',
      './test/features/support/steps.js'
    ]
  },

  capabilities: [{
      browserName: 'chrome'
  }],

  logLevel: 'silent',
  coloredLogs: true,
  screenshotPath: 'shots',
  waitforTimeout: 20000,
  framework: 'cucumber',

  baseUrl: 'http://localhost:8080',

  reporter: 'spec',
  reporterOptions: {
      outputDir: './'
  },

  before: function(){
    var timeout = 5000;
    browser.timeouts('page load', timeout);
    browser.timeouts('implicit', timeout);
  },

};
