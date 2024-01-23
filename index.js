import fs from 'fs';
import { printer } from './helpers.js';
import { program } from 'commander';

program.arguments('<cmd>')

program
  .option('-e, --env <env>');

program.parse();

async function run() {
  let config = {};

  const options = program.opts();

  if (options.env) {
    config = JSON.parse(fs.readFileSync(`./env/${options.env}.json`, 'utf8'));
  }

  try {
    const { handler } = await import('./calls/' + program.args[0] + '.js')
    const response = await handler(config);

    if (response) {
      printer(response);
    }
  } catch (error) {
    console.error(error);
  }
}

run().then(console.log).catch(console.error);
