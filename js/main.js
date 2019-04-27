let mainDiv = document.getElementById('app')

let gameEngine = new Engine(mainDiv)
let enemyCountLabel = document.getElementById('enemyLabel')
enemyCountLabel.style.position = "absolute"
enemyCountLabel.style.top = (ENEMY_HEIGHT * 2) + GAME_HEIGHT + 10 + "px"

let menu = document.getElementById('startMenu')
let startButton = document.getElementById("startButton")
let instructionsButton = document.getElementById("instructionsButton")

let themeMusic = new Audio('sounds/clash.mp3')

let scoreLabel = new Text(mainDiv, 900, 25)

scoreLabel.update(`BAC: Sober`)

let timeLabel = new Text(mainDiv, 1250, 25);

let bubbleSound = () => {
   let sound = new Audio('sounds/bubbles.mp3')
   sound.play()
   setTimeout(() => { sound.pause() }, 500)
}


let keydownHandler = event => {

   let randomNum = Math.round(Math.random() * 4)

   if (event.code === "ArrowLeft") {
      if (randomNum === 2) bubbleSound()
      gameEngine.player.moveLeft()
   }
   if (event.code === "ArrowRight") {
      if (randomNum === 2) bubbleSound()
      gameEngine.player.moveRight()
   }
   if (event.code === "ArrowUp") {
      if (randomNum === 2) bubbleSound()
      gameEngine.player.moveUp()
   }
   if (event.code === "ArrowDown") {
      if (randomNum === 2) bubbleSound()
      gameEngine.player.moveDown()
   }
}

let spaceToStart = event => {
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

document.addEventListener("keydown", spaceToStart)


