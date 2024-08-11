class Renderer {
  constructor(width, height) {
    this.width = width;
    this.height = height;

    this.initCanvas();
    this.initSize();
  }

  initCanvas() {
    this.canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");
  }

  initSize() {
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  drawRectangle(color, position, size) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(position.x, position.y, size.x, size.y);
  }

  drawCricle(color, position, radius) {
    this.ctx.fillStyle = color;
    this.ctx.beginPath();
    this.ctx.arc(position.x, position.y, radius, 0, 2 * Math.PI, false);
    this.ctx.fill();
  }
}

export const renderer = new Renderer(500, 200);
