class Enemy {

   constructor(theRoot, enemySpot) {
      this.root = theRoot
      this.spot = enemySpot
      this.direction = Math.round(Math.random())
      this.type = Math.round(Math.random() * 2)
      this.x = enemySpot * ENEMY_WIDTH
      this.y = this.direction ? -ENEMY_HEIGHT : GAME_HEIGHT + ENEMY_HEIGHT
      this.domElement = document.createElement("img")
      this.domElement.className = "floatingH"
      if (this.type === 0) {
         this.domElement.src = "images/octopus-up2.png"
      }
      else {
         this.domElement.src = this.direction ? "images/crab-down.png" : "images/blowfish-up.png"
      }
      this.domElement.style.position = "absolute"
      this.domElement.style.left = this.x + "px"
      this.domElement.style.top = this.y + "px"
      this.domElement.style.zIndex = 5
      theRoot.appendChild(this.domElement)
      this.speed = Math.random() / 2.2 + 0.1 //originally +0.25
   }

   moveVerticalDown(timeDiff) {
      this.y = this.y + timeDiff * this.speed
      this.domElement.style.top = this.y + "px"
      if (this.y > GAME_HEIGHT + ENEMY_HEIGHT) {
         this.root.removeChild(this.domElement)
         this.destroyed = true
      }
   }

   moveVerticalUp(timeDiff) {
      this.y = this.y - timeDiff * this.speed
      this.domElement.style.top = this.y + "px"
      if (this.y < 0) {
         this.root.removeChild(this.domElement)
         this.destroyed = true
      }
   }

} 
