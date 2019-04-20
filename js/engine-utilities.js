

let nextEnemySpot = enemies => {
   let enemySpots = GAME_WIDTH / ENEMY_WIDTH
   let spotsTaken = [false, false, false, false, false, false, false, false, false, false]
   enemies.forEach(enemy => {
      spotsTaken[enemy.spot] = true
   })
   let candidate = undefined
   while (candidate === undefined || spotsTaken[candidate]) {

      candidate = Math.floor(Math.random() * enemySpots)
   }
   return candidate
}
let addBackground = root => {

   let topBox = document.createElement("div")
   topBox.style.zIndex = 100
   topBox.style.position = "absolute"
   topBox.style.top = "0px"
   topBox.style.height = ENEMY_HEIGHT + "px"
   topBox.style.width = GAME_WIDTH + 100 + "px"
   topBox.style.background = "black"
   root.append(topBox)

   let bg = document.createElement("img")
   bg.src = "images/underwater.gif"
   bg.style.position = "absolute"
   bg.style.height = GAME_HEIGHT + "px"
   bg.style.width = GAME_WIDTH + "px"
   bg.style.top = ENEMY_HEIGHT + "px"
   root.append(bg)

   let bottomBox = document.createElement("div")
   bottomBox.style.zIndex = 100
   bottomBox.style.position = "absolute"
   bottomBox.style.top = GAME_HEIGHT + ENEMY_HEIGHT + "px"
   bottomBox.style.height = ENEMY_HEIGHT + "px"
   bottomBox.style.width = GAME_WIDTH + 100 + "px"
   bottomBox.style.background = "black"
   root.append(bottomBox)
}

let updateScoreLabel = () => {
   enemyCountLabel.innerText = `Enemy count: ${ENEMY_COUNT}`
}

let incrementEnemyCount = () => {
   if (ENEMY_COUNT === 10) return;
   ENEMY_COUNT++
   updateScoreLabel();
}



