let mainDiv = document.getElementById('app')

let gameEngine = new Engine(mainDiv)

let scoreLabel = document.getElementById('enemyLabel')

let startLabel = new Text(mainDiv, 250, GAME_HEIGHT / 2, 60)
startLabel.update("Press space to begin!")

let timeLabel = new Text(mainDiv, 850, 25, 30);

let interval;

let startGame = () => {
   startLabel.update("")
   clearInterval(interval)
   gameEngine.pause = false;
   MAX_ENEMIES = 1;
   updateScoreLabel();
   gameEngine.restartTimer();
   gameEngine.gameLoop();
   interval = setInterval(incrementEnemyCount, 5000);
}

let pauseGame = () => {
   gameEngine.pause = !gameEngine.pause

   if (!gameEngine.pause) {
      setTimeout(gameEngine.gameLoop, 5)
   }
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
      if (gameEngine.pause) startGame()
   }
   if (event.code === "KeyP") {
      pauseGame()
   }
}

window.addEventListener("keydown", event => {
   // space and arrow keys
   if ([32, 37, 38, 39, 40].indexOf(event.keyCode) > -1) {
      event.preventDefault();
   }
}, false);

document.addEventListener("keydown", keydownHandler)





