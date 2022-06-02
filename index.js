// number guessing game that generates a number between a dynamic range

const prompt = require("prompt-sync")({ sigint: true });

let max_range = 2;
let game = true
let points = 0
let stageCount = 1
const username = prompt(`Enter a username: `);


function gammer(range) {
  while(game) {
    console.log(`\nSTAGE ${stageCount}`)
    const genNum = Math.ceil(Math.random() * range)
    const chosenRange = parseInt(prompt(`Choose a number between 1 and ${range}: `));
    if(chosenRange === genNum) {
      range++
      points++
      stageCount++
      console.log(
        `\n yay!!!, you guessed right\n${username} has been awarded 1 point\n`
      )
    }
    else {
      console.log(
        `\n oooops, you guessed wrong\n${username} won a total of ${points} point${points > 1 ? "s" : ""}`
      )
      game = false
    }
  }
}

gammer(max_range)
