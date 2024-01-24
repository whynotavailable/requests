# Req

This repository is a living example of a way to make HTTP requests for testing
purposes relatively easily.

It's real simple. Put a .js file in the calls directory. It should export a
function that looks like this.

```js
export async function handler(config) {
  console.log('hi');
}
```

Run a command that looks kind of like this...
```sh
node ./index.js {your file relative to the calls directory}

# Kind of like this
node ./index.js basic

# If you like directories
node ./index.js myapp/basic
```

You can put json files in the `env` directory and reference them with the `-e`
flag. The file will be read, and sent to the handler. Like this...

```sh
node ./index.js -e some-env basic
```

If the handler function returns an object (like an axios response) the `printer`
helper function will automatically be called on it.

```js
import axios from 'axios'

export async function handler(config) {
  return await axios.get('https://jsonplaceholder.typicode.com/todos/1')
}
```

CC0, I'm not adding a separate file for three letters.

That's it.
