import GameSavingLoader from './promise.js'

GameSavingLoader.load().then((saving) => {
    const result = JSON.parse(saving)
    console.log(result)
  }, (error) => {
    console.log(error)
});