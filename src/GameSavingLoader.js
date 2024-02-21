import read from './reader.js'
import json from './parser.js'

export default class GameSavingLoader {
  static async load() {
    const data = await read();
    const dataJson = await json(data)
    return dataJson
  }
}

// export default class GameSavingLoader {
//   static load() {
//     return read().then(data => json(data))
//   }
// }