class Goal {

   constructor(root) {
      // Starting x position
      // this.x = GAME_WIDTH - PLAYER_WIDTH
      // Starting y position
      // this.y = (GAME_HEIGHT / 2) + (ENEMY_HEIGHT)
      this.setRandomPosition();
      //Player dom node
      this.domElement = document.createElement("img")
      //Player img source
      this.domElement.src = "images/plate2.png"
      //
      this.domElement.style.position = "absolute"
      //Styling for left and top positions
      this.domElement.style.left = this.x + "px"
      this.domElement.style.top = this.y + "px"
      //Layering
      this.domElement.style.zIndex = "9"

      root.appendChild(this.domElement)
   }

   setRandomPosition() {

      this.x = 3 + (75 * (Math.floor(Math.random() * 19.2)))
      this.y = ENEMY_HEIGHT + 3 + (75 * (Math.floor(Math.random() * 8)))

      // console.log(`Goal x ${this.x} y ${this.y}`)
   }

}