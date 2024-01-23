import fs from 'fs';
import { printer } from './helpers.js';

async function run() {
  let config = {};

  if (fs.existsSync('./env/main.json')) {
    config = JSON.parse(fs.readFileSync('./env/main.json', 'utf8'));
  }

  try {
    const { handler } = await import('./calls/' + process.argv[process.argv.length - 1] + '.js')
    const response = await handler(config);

    if (response) {
      printer(response);
    }
  } catch (error) {
    console.error(error);
  }
}

run().then(console.log).catch(console.error);
