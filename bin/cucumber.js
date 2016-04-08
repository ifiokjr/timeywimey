import 'colors';

import { Cli } from 'cucumber';
import { exec } from 'child_process';
const cli = Cli(process.argv);

const runWithDocker: Boolean = process.env.NODE_ENV === 'test:docker';

if (runWithDocker) {
  // Get a list of available docker machines
  runDockerMachineCommand('docker-machine ls')

  // Format the output and obtain the default configuration
  .then((output) => {
    return formatLS(output)['default'];
  })
  // Start the default machine if available otherwise throw an error
  .then((machine) => {
    if (!machine) {
      throw new Error('Please set up a default machine -- We\'re working on fallbacks');
    }
  })
  // Run docker on the default machine

  // Check for any errors and log them to the console.
  .catch((err) => {
    console.log(`${err}`.red);
  });
} else {
  cli.run((success: Boolean) => {
    const code: Number = success ? 0 : 1;

    function exitNow () {
      console.log(`exiting with code ${code}`);
    }

    if (process.stdout.write('')) {
      exitNow();
    } else {
      process.stdout.on('drain', exitNow);
    }
  });
}

/**
 * Run a command and make the raw result available
 */

function runDockerMachineCommand (command: String): Promise {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(stderr);
        return;
      }

      resolve(stdout);
    });
  });
}

/**
 * Return an object containing all the available machines,
 * their status, driver and url
 * @param  {[type]} input: String        [description]
 * @return {[type]}        [description]
 */
function formatLS (input: String): object {

}
