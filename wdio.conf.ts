export const config: WebdriverIO.Config = {
  runner: 'local',

  user: 'oauth-apanhador.livros-6332c',
  key: '360722c3-a881-464e-a44e-bad3fd9d8a77',

  hostname: 'ondemand.us-west-1.saucelabs.com',
  port: 443,
  protocol: 'https',

  specs: ['./test/specs/**/*.ts'],

  maxInstances: 1,

  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'Android GoogleAPI Emulator',
    'appium:platformVersion': '13.0',
    'appium:automationName': 'UiAutomator2',

   
    'appium:app': 'storage:filename=android.wdio.native.app.v2.2.0 (1).apk',

    'sauce:options': {
      build: 'WDIO Android',
      name: 'Login Test'
    }
  }],

  framework: 'mocha',

  reporters: ['spec'],

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  }
}