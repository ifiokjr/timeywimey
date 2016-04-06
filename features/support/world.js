import webdriverio from 'webdriverio';
import 'colors';

const options = {
  desiredCapabilities: {
    browserName: 'chrome'
  }
};

console.log(webdriverio, 'webdriverio'.bold.red);
class World {
  constructor () {
    this.browser = webdriverio.remote(options).init();
    console.log('Is this ever callednode'.bold.yellow);
  }
}

export default function named () {
  this.World = World;
}

// export default named;
module.exports = named;
