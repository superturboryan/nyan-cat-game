class Goal {

   constructor(root) {
      this.x = GAME_WIDTH - PLAYER_WIDTH
      //Starting y position
      let y = (GAME_HEIGHT / 2) + (ENEMY_HEIGHT)
      this.y = y
      //Player dom node
      this.domElement = document.createElement("img")
      //Player img source
      this.domElement.src = "images/plate2.png"
      //
      this.domElement.style.position = "absolute"
      //Styling for left and top positions
      this.domElement.style.left = this.x + "px"
      this.domElement.style.top = y + "px"
      //Layering
      this.domElement.style.zIndex = "9"

      root.appendChild(this.domElement)
   }



}