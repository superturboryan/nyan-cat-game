let mainDiv = document.getElementById('app')

let gameEngine = new Engine(mainDiv)
// console.log("Screen width", screen.width)
let enemyCountLabel = document.getElementById('enemyLabel')
enemyCountLabel.style.position = "absolute"
enemyCountLabel.style.top = (ENEMY_HEIGHT * 2) + GAME_HEIGHT + 10 + "px"

let startLabel = new Text(mainDiv, 250, ENEMY_HEIGHT + (GAME_HEIGHT / 2), 60)

startLabel.update("Press space to begin!")

let scoreLabel = new Text(mainDiv, 1000, 20, 30)

scoreLabel.update(`Score: ${gameEngine.score}`)

let timeLabel = new Text(mainDiv, 1250, 20, 30);

let interval;

let refreshInterval;

let refreshPlayer = () => {
   // gameEngine.player.domElement.src === "file:///Users/ryan/decode/my-workshops/fisher/images/fish.png" ?
   //    gameEngine.player.domElement.src = "file:///Users/ryan/decode/my-workshops/fisher/images/fish2.png"
   //    : gameEngine.player.domElement.src = "file:///Users/ryan/decode/my-workshops/fisher/images/fish.png"
}

let startGame = () => {
   startLabel.update("")
   clearInterval(interval)
   clearInterval(refreshInterval)
   ENEMY_COUNT = 5;
   updateEnemyCountLabel();
   gameEngine.restartStats();
   gameEngine.gameLoop();
   refreshInterval = setInterval(refreshPlayer, 500)
   interval = setInterval(incrementEnemyCount, 3000);
}


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
      gameEngine.resetPlayer();
      startGame()
   }

}

//Disable normal arrow controls
window.addEventListener("keydown", event => {
   // space and arrow keys
   if ([32, 37, 38, 39, 40].indexOf(event.keyCode) > -1) {
      event.preventDefault();
   }
}, false);

document.addEventListener("keydown", keydownHandler)





