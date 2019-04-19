let mainDiv = document.getElementById('app')

let gameEngine = new Engine(mainDiv)

let scoreLabel = document.getElementById('scoreLabel')

let label = new Text(mainDiv, 600, 25);

let interval;

let startGame = () => {
   clearInterval(interval)
   MAX_ENEMIES = 1;
   updateScoreLabel();
   gameEngine.restartTimer();
   gameEngine.gameLoop();
   interval = setInterval(incrementEnemyCount, 5000);
}

let pauseGame = () => {
   gameEngine.pause = !gameEngine.pause

   if (!gameEngine.pause) {
      setTimeout(gameEngine.gameLoop, 20)
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
      startGame()
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





