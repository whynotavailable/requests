import axios from 'axios'

export async function handler(config) {
  return await axios.get('https://jsonplaceholder.typicode.com/todos/1')
}
