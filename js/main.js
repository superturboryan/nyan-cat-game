let mainDiv = document.getElementById('app')

let gameEngine = new Engine(mainDiv)

let scoreLabel = document.getElementById('scoreLabel')

let label = new Text(mainDiv, 700, 25);

let interval;

let startGame = () => {
   clearInterval(interval)
   MAX_ENEMIES = 1;
   updateScoreLabel();
   gameEngine.restartTimer();
   gameEngine.gameLoop();
   interval = setInterval(incrementEnemyCount, 5000);
}

let keydownHandler = event => {
   if (event.code === "ArrowLeft") {
      gameEngine.player.moveLeft()
   }
   if (event.code === "ArrowRight") {
      gameEngine.player.moveRight()
   }
   if (event.code === "Space") {
      startGame()
   }
}

document.addEventListener("keydown", keydownHandler)





