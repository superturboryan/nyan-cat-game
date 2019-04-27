class Text {
   constructor(root, xPos, yPos) {
      let div = document.createElement("div")
      div.style.position = "absolute"
      div.style.left = xPos
      div.style.top = yPos
      div.style.color = "white"
      div.style.fontSize = "30px"
      div.style.zIndex = 2000
      div.style.fontFamily = "'Roboto Mono', monospace"
      root.appendChild(div)
      this.domElement = div
   }
   update(txt) {
      this.domElement.innerText = txt
   }
} 
