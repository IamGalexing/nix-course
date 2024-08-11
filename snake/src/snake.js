import { Vector } from "./vector.js";
import { Rectangle } from "./rectangle.js";
import { MovingShape } from "./moving-shape.js";

export class Snake extends MovingShape {
  constructor() {
    super(new Vector(100, 100), new Vector(-5, 0));

    this.velocity = new Vector(1, 0);

    this.length = 5;
    this.body = [];
    this.cellSize = new Vector(5, 5);

    this.initBody();
  }

  initBody() {
    for (let i = 0; i < this.length; i++) {
      const cellY = this.position.y;
      const cellX = this.position.x + i * this.cellSize.x;
      const cellPosition = new Vector(cellX, cellY);

      const cell = new Rectangle(cellPosition, this.cellSize);

      this.body.push(cell);
    }
  }

  update() {
    super.update();

    const newHead = new Rectangle(this.position.copy(), this.cellSize);
    this.body.unshift(newHead);
    this.body = this.body.slice(0, this.length);
  }

  draw() {
    this.body.forEach((cell) => cell.draw());
  }

  grow() {
    this.length++;
  }
}
