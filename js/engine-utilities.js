

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
   bottomBox.style.height = ENEMY_HEIGHT + 100 + "px"
   bottomBox.style.width = GAME_WIDTH + 100 + "px"
   bottomBox.style.background = "black"
   root.append(bottomBox)
}

let updateEnemyCountLabel = () => {
   enemyCountLabel.innerText = `Enemy count: ${ENEMY_COUNT}`
}

let incrementEnemyCount = () => {
   if (ENEMY_COUNT === 8) return;
   ENEMY_COUNT++
   updateEnemyCountLabel();
   console.log(`Enemy count: ${ENEMY_COUNT}`)
}

let showStartMenu = () => {

   let menu = document.getElementById('startMenu')
   let titleLabel = document.getElementById('titleLabel')
   let startButton = document.getElementById('startButton')
   let instructionsButton = document.getElementById('instructionsButton')

   menu.style.position = 'absolute'
   menu.style.top = ENEMY_HEIGHT + 150 + "px"
   menu.style.left = "380px"
   menu.style.height = GAME_HEIGHT / 2 + "px"
   menu.style.width = PLAYER_WIDTH * 9 + "px"
   menu.style.zIndex = 100
   menu.style.border = "solid black 4px"
   menu.style.borderRadius = "25px"
   menu.style.backgroundColor = "rgba(0,0,0,0.2)"


   startButton.style.marginTop = "60px"
   startButton.style.marginLeft = "90px"
   startButton.style.marginRight = "90px"
   startButton.style.marginBottom = "50px"
   startButton.style.height = BUTTON_HEIGHT + "px"
   startButton.style.width = BUTTON_WIDTH + "px"
   startButton.zIndex = 100


   instructionsButton.style.marginTop = "60px"
   instructionsButton.style.marginRight = "90px"
   instructionsButton.style.marginBottom = "50px"
   instructionsButton.style.height = BUTTON_HEIGHT + "px"
   instructionsButton.style.width = BUTTON_WIDTH + "px"
   instructionsButton.zIndex = 100

   titleLabel.style.textAlign = "center"
   titleLabel.style.marginTop = "50px"
}

let instructionsPressed = () => {
   menu.style.display = "none"
   let instructions = document.createElement('div')
   instructions.id = "instructions"
   instructions.className = "menu"
   instructions.style.position = 'absolute'
   instructions.style.top = ENEMY_HEIGHT + 150 + "px"
   instructions.style.left = "380px"
   instructions.style.height = GAME_HEIGHT / 2 + "px"
   instructions.style.width = PLAYER_WIDTH * 9 + "px"
   instructions.style.zIndex = 100
   instructions.style.border = "solid black 4px"
   instructions.style.borderRadius = "25px"
   instructions.style.backgroundColor = "rgba(0,0,0,0.2)"
   instructions.style.textAlign = "center"
   instructions.style.fontSize = "25px"
   instructions.style.fontFamily = "'Roboto Mono', monospace"
   mainDiv.appendChild(instructions)

   instructions.innerText = `
   You've just finished work developing at Goggle and you have a serious thirst to quench.
   Swim around using the ARROW KEYS while avoiding the hostile sea-creatures.
   
   Press the SPACEBAR to begin
   `

}



