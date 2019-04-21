

class Player {
   //Parameter is the dom element to which the player node is added
   constructor(root) {
      //Starting x position
      this.x = 0
      //Starting y position
      this.y = (GAME_HEIGHT / 2) + (ENEMY_HEIGHT) // Originally GAME_HEIGHT - PLAYER_HEIGHT - 10 
      //Player dom node
      this.domElement = document.createElement("img")
      //Player img source
      this.domElement.src = "images/fish-right.png"
      //
      this.domElement.style.position = "absolute"
      //Styling for left and top positions
      this.domElement.style.left = this.x + "px"
      this.domElement.style.top = this.y + "px"
      //Layering
      this.domElement.style.zIndex = "10"
      this.direction = "R";
      this.domElement.className = "rotating"



      root.appendChild(this.domElement)
   }

   moveLeft() {
      if (this.x > 0) {
         this.direction = "L"
         this.x = this.x - PLAYER_WIDTH
         this.domElement.src = "file:///Users/ryan/decode/my-workshops/fisher/images/fish-left.png"
      }
      this.domElement.style.left = this.x + "px"
   }

   moveRight() {
      if (this.x + PLAYER_WIDTH < GAME_WIDTH - 20) {
         this.direction = "R"
         this.x = this.x + PLAYER_WIDTH
         this.domElement.src = "file:///Users/ryan/decode/my-workshops/fisher/images/fish-right.png"
      }
      this.domElement.style.left = this.x + "px"
   }

   moveDown() {
      if (this.y + PLAYER_HEIGHT < ENEMY_HEIGHT + GAME_HEIGHT) {
         this.direction = "D"
         this.y = this.y + PLAYER_HEIGHT
         this.domElement.src = "file:///Users/ryan/decode/my-workshops/fisher/images/fish-down.png"
      }
      this.domElement.style.top = this.y + "px"
   }

   moveUp() {
      //If the top of the player is not a y=0, move the player according to his height
      if (this.y > 0 + ENEMY_HEIGHT) {
         this.direction = "U"
         this.y = this.y - PLAYER_HEIGHT
         this.domElement.src = "file:///Users/ryan/decode/my-workshops/fisher/images/fish-up.png"
      }
      this.domElement.style.top = this.y + "px"
   }

   refreshPlayer() {

      this.domElement = gameEngine.player.domElement

      this.direction = gameEngine.player.direction

      if (this.direction === "R") {
         this.domElement.src === "file:///Users/ryan/decode/my-workshops/fisher/images/fish-right.png" ?
            this.domElement.src = "file:///Users/ryan/decode/my-workshops/fisher/images/fish-right2.png" :
            this.domElement.src = "file:///Users/ryan/decode/my-workshops/fisher/images/fish-right.png"
      }
      if (this.direction === "L") {
         this.domElement.src === "file:///Users/ryan/decode/my-workshops/fisher/images/fish-left.png" ?
            this.domElement.src = "file:///Users/ryan/decode/my-workshops/fisher/images/fish-left2.png" :
            this.domElement.src = "file:///Users/ryan/decode/my-workshops/fisher/images/fish-left.png"
      }
      if (this.direction === "U") {
         this.domElement.src === "file:///Users/ryan/decode/my-workshops/fisher/images/fish-up.png" ?
            this.domElement.src = "file:///Users/ryan/decode/my-workshops/fisher/images/fish-up2.png" :
            this.domElement.src = "file:///Users/ryan/decode/my-workshops/fisher/images/fish-up.png"
      }
      if (this.direction === "D") {
         this.domElement.src === "file:///Users/ryan/decode/my-workshops/fisher/images/fish-down.png" ?
            this.domElement.src = "file:///Users/ryan/decode/my-workshops/fisher/images/fish-down2.png" :
            this.domElement.src = "file:///Users/ryan/decode/my-workshops/fisher/images/fish-down.png"
      }
   }


} 