import GameSavingLoader from './GameSavingLoader.js';

(async () => {
  try {
    const data = await GameSavingLoader.load()
    console.log(data)
  } catch (error) {
    console.log(error)
  }})()
