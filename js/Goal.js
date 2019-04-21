class Goal {

   constructor(root) {
      // Starting x position
      // this.x = GAME_WIDTH - PLAYER_WIDTH
      // Starting y position
      // this.y = (GAME_HEIGHT / 2) + (ENEMY_HEIGHT)
      this.setRandomPosition();
      //Player dom node
      this.domElement = document.createElement("img")
      //
      this.domElement.style.position = "absolute"
      //Styling for left and top positions
      this.domElement.style.left = this.x + "px"
      this.domElement.style.top = this.y + "px"
      //Layering
      this.domElement.style.zIndex = "9"
      //Make it float!
      this.domElement.className = "floating"
      this.value = Math.round(Math.random() * 2)
      //Player img source
      if (this.value === 2) {
         this.domElement.src = "images/beer2.png"
      }
      else {
         this.domElement.src = "images/beer.png"
      }

      root.appendChild(this.domElement)
   }

   setRandomPosition() {

      this.x = (75 * (Math.floor(Math.random() * 18.2)))
      this.y = ENEMY_HEIGHT + 3 + (75 * (Math.floor(Math.random() * 8)))

      // console.log(`Goal x ${this.x} y ${this.y}`)
   }

   remove() {
      this.domElement.style.display = "none"
   }

}
