let mainDiv = document.getElementById('app')

let gameEngine = new Engine(mainDiv)

let scoreLabel = document.getElementById('scoreLabel')

let label = new Text(mainDiv, 300, 25);

let updateScoreLabel = () => {
   scoreLabel.innerText = `Enemy count: ${MAX_ENEMIES}`
}

let keydownHandler = event => {
   if (event.code === "ArrowLeft") {
      gameEngine.player.moveLeft()
   }
   if (event.code === "ArrowRight") {
      gameEngine.player.moveRight()
   }
}
let incrementEnemyCount = () => {
   if (MAX_ENEMIES === 5) return;
   MAX_ENEMIES++
   updateScoreLabel();
}

document.addEventListener("keydown", keydownHandler)

updateScoreLabel();

gameEngine.gameLoop()

setInterval(incrementEnemyCount, 5000)




