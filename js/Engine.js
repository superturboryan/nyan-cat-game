class Engine {
   gameLoop = () => {
      if (this.lastFrame === undefined) this.lastFrame = (new Date).getTime()
      let timeDiff = (new Date).getTime() - this.lastFrame
      this.lastFrame = (new Date).getTime()
      this.enemies.forEach(enemy => {
         enemy.update(timeDiff)
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
         if ((enemy.x > this.player.x - (PLAYER_WIDTH / 2) && enemy.x < this.player.x + (PLAYER_WIDTH / 2)) && enemy.y + ENEMY_HEIGHT > this.player.y) {
            collision = true
         }
      })
      return collision;
   }
   constructor(theRoot) {
      this.root = theRoot
      this.player = new Player(this.root)
      this.enemies = []
      addBackground(this.root)
   }
}













