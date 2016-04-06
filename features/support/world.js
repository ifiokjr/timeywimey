// import webdriverio from 'webdriverio'; //TODO FIX
const webdriverio = require('webdriverio'); // FIXME
import 'colors';

const options = {
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
