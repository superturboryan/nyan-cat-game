let mainDiv = document.getElementById('app')

let gameEngine = new Engine(mainDiv)
// console.log("Screen width", screen.width)
let enemyCountLabel = document.getElementById('enemyLabel')
enemyCountLabel.style.position = "absolute"
enemyCountLabel.style.top = (ENEMY_HEIGHT * 2) + GAME_HEIGHT + 10 + "px"

let menu = document.getElementById('startMenu')
let startButton = document.getElementById("startButton")
let instructionsButton = document.getElementById("instructionsButton")

// let startLabel = new Text(mainDiv, 250, ENEMY_HEIGHT + (GAME_HEIGHT / 2), 60)

// startLabel.update("Press space to begin!")

let scoreLabel = new Text(mainDiv, 1000, 20, 30)

scoreLabel.update(`Score: ${gameEngine.score}`)

let timeLabel = new Text(mainDiv, 1250, 20, 30);


let keydownHandler = event => {
   if (event.code === "ArrowLeft") {
      gameEngine.player.moveLeft()
   }
   if (event.code === "ArrowRight") {
      gameEngine.player.moveRight()
   }
   if (event.code === "ArrowUp") {
      gameEngine.player.moveUp()
   }
   if (event.code === "ArrowDown") {
      gameEngine.player.moveDown()
   }
   if (event.code === "Space") {
      gameEngine.startGame()
   }
}

//Disable normal arrow controls for scrolling
window.addEventListener("keydown", event => {
   // space and arrow keys
   if ([32, 37, 38, 39, 40].indexOf(event.keyCode) > -1) {
      event.preventDefault();
   }
}, false);


startButton.addEventListener("click", gameEngine.startGame)
instructionsButton.addEventListener("click", instructionsPressed)
showStartMenu()





