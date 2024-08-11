import { Vector } from "./vector";
import { Rectangle } from "./rectangle";
import { MovingShape } from "./moving-shape";

export class Snake extends MovingShape {
  private length = 5;
  private body: Rectangle[] = [];
  private cellSize = new Vector(5, 5);

  constructor() {
    super(new Vector(100, 100), new Vector(-5, 0));

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
