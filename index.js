const axios = require('axios');
const fs = require('fs');
const printer = require('./helpers').printer;

async function run() {
  let config = {};

  if (fs.existsSync('./env/main.json')) {
    config = require('./env/main.json');
    console.log(config);
  }

  try {
    const handler = require('./calls/' + process.argv[process.argv.length - 1]).handler
    const response = await handler(config);

    if (response) {
      printer(response);
    }
  } catch (error) {
    console.error(error);
  }
}

run().then(console.log).catch(console.error);
