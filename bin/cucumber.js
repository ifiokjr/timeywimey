import { argv } from 'yargs';
import { Cli } from 'cucumber';
const cli = Cli(process.argv);

console.log(process.argv.slice(2));
console.log(argv);

cli.run((success) => {
  const code = success ? 0 : 1;

  function exitNow () {
    console.log(`exiting with code ${code}`);
  }

  if (process.stdout.write('')) {
    exitNow();
  } else {
    process.stdout.on('drain', exitNow);
  }
});
