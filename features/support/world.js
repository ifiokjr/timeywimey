// import webdriverio from 'webdriverio'; //TODO FIX
const webdriverio = require('webdriverio'); // FIXME
import 'colors';

const host = process.env.SELENIUM_HOST || '127.0.0.1';

const options = {
  host,
  desiredCapabilities: {
    browserName: 'chrome'
  }
};

class World {
  constructor () {
    this.browser = webdriverio.remote(options);
  }
}

export default function named () {
  this.World = World;
}
