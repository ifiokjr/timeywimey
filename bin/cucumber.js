import 'colors';

import { Cli } from 'cucumber';
import { exec } from 'child_process';
const cli = Cli(process.argv);

const runWithDocker: Boolean = process.env.NODE_ENV === 'test:docker';

if (runWithDocker) {
  // Assume docker-compose is available and start it up
  runCommand('docker-compose up')

  // Log the output to the console
  .then((output) => {
    return formatLS(output)['default'];
  })

  // // Start the default machine if available otherwise throw an error
  // .then((machine) => {
  //   if (!machine) {
  //     throw new Error('Please set up a default machine -- We\'re working on fallbacks');
  //   }
  // })
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

function runCommand (command: String): Promise {
  return new Promise((resolve, reject) => {
    const cmd = exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(stderr);
        return;
      }

      resolve(stdout);
    });

    cmd.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });

    cmd.stderr.on('data', (data) => {
      console.log(`stderr: ${data}`);
    });
  });
}

/**
 * Return an object containing all the available machines,
 * their status, driver and url
 */
function formatLS (input: String): object {
  console.log(input);
  return true;
}
