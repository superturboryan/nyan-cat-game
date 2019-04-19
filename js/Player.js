

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
      this.domElement.src = "images/fish.png"
      //
      this.domElement.style.position = "absolute"
      //Styling for left and top positions
      this.domElement.style.left = this.x + "px"
      this.domElement.style.top = this.y + "px"
      //Layering
      this.domElement.style.zIndex = "10"

      root.appendChild(this.domElement)
   }

   moveLeft() {
      if (this.x > 0) {
         this.x = this.x - PLAYER_WIDTH
      }
      this.domElement.style.left = this.x + "px"
   }

   moveRight() {
      if (this.x + PLAYER_WIDTH < GAME_WIDTH) {
         this.x = this.x + PLAYER_WIDTH
      }
      this.domElement.style.left = this.x + "px"
   }

   moveDown() {
      if (this.y + PLAYER_HEIGHT < ENEMY_HEIGHT + GAME_HEIGHT) {
         this.y = this.y + PLAYER_HEIGHT
      }
      this.domElement.style.top = this.y + "px"
   }

   moveUp() {
      //If the top of the player is not a y=0, move the player according to his height
      if (this.y > 0 + ENEMY_HEIGHT) {
         this.y = this.y - PLAYER_HEIGHT
      }
      this.domElement.style.top = this.y + "px"
   }
} 