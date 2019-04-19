class Engine {

   constructor(theRoot) {
      this.root = theRoot
      this.player = new Player(this.root)
      this.enemies = []
      addBackground(this.root)
      this.startTime = new Date();
      this.pause = false;
   }

   gameLoop = () => {

      if (this.pause) {
         return;
      }

      let loopTime = new Date()

      //Update timer label created in main
      label.update(`Time: ${Math.floor((loopTime - this.startTime) / 1000)}s`)

      if (this.lastFrame === undefined) this.lastFrame = (new Date).getTime()
      let timeDiff = (new Date).getTime() - this.lastFrame
      this.lastFrame = (new Date).getTime()
      this.enemies.forEach(enemy => {
         enemy.moveVertical(timeDiff)
      })

      this.enemies = this.enemies.filter(enemy => {
         return !enemy.destroyed
      })

      while (this.enemies.length < MAX_ENEMIES) {
         let spot = nextEnemySpot(this.enemies)
         this.enemies.push(new Enemy(this.root, spot))
      }

      if (this.isPlayerDead()) {
         window.alert("Game over")
         return
      }
      setTimeout(this.gameLoop, 20)
   }


   isPlayerDead = () => {
      let collision = false;
      this.enemies.forEach(enemy => {
         /* 
         Check that enemy's x position is greater than the player's left boundary AND less than the right boundary
         AND enemy's lower boundary is greater than the players top (y) boundary.
         */
         if ((enemy.x > this.player.x - (PLAYER_WIDTH / 2) && enemy.x < this.player.x + (PLAYER_WIDTH / 2))
            && (enemy.y + ENEMY_HEIGHT / 2 > this.player.y - (PLAYER_HEIGHT / 2) && enemy.y < this.player.y + (PLAYER_HEIGHT / 2))) {
            collision = true
         }
      })
      return collision;
   }

   restartTimer = () => {
      this.startTime = new Date();
   }


}













