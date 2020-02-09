class Rect {
  constructor(canvas, x, y, width, height, color) {
    this.canvas = canvas
    this.ctx = this.canvas.getContext('2d')
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.color = color
  }

  draw() {
    this.ctx.beginPath()
    this.ctx.fillStyle = this.color
    this.ctx.fillRect(this.x, this.y, this.width, this.height)
    this.ctx.strokeRect(this.x, this.y, this.width, this.height)
  }

}

class Snake {
  constructor(canvas) {
    this.canvas = canvas
    this.header = new Rect(this.canvas, canvas.width / 2, canvas.height / 2, 20, 20, 'red')
    this.body = []
    this.diretion = 2
    this.hasAteFood = false
  }

  init() {
    let x = this.header.x - 20
    let y = this.header.y
    for (let i = 0; i < 3; i++) {
      const bodyRect = new Rect(this.canvas, x, y, 20, 20, 'blue')
      this.body.push(bodyRect)
      x -= 20
    }
  }

  draw() {
    this.header.draw()
    for (let i = 0; i < this.body.length; i++) {
      this.body[i].draw()
    }
  }

  move() {
    const rect = new Rect(this.canvas, this.header.x, this.header.y, this.header.width, this.header.height, 'blue')
    this.body.splice(0, 0, rect)
    if (!this.hasAteFood) {
      this.body.pop()
    } else {
      this.hasAteFood = false
    }
    switch (this.diretion) {
      case 0: {
        this.header.x -= this.header.width
        break
      }
      case 1: {
        this.header.y -= this.header.height
        break
      }
      case 2: {
        this.header.x += this.header.width
        break
      }
      case 3: {
        this.header.y += this.header.height
        break
      }
    }

  }
}

export {Rect, Snake}
