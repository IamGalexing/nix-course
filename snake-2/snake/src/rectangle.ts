import { Shape } from "./shape";
import { renderer } from "./renderer";
import { Vector } from "./vector";

export class Rectangle extends Shape {
  private size: Vector;

  constructor(position: Vector, size: Vector) {
    super(position);

    this.size = size;
  }

  draw() {
    renderer.drawRectangle("#FF0000", this.position, this.size);
  }
}
