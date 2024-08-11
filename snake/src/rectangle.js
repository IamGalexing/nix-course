import { Shape } from "./shape.js";
import { renderer } from "./renderer.js";

export class Rectangle extends Shape {
  constructor(position, size) {
    super(position);

    this.size = size;
  }

  draw() {
    renderer.drawRectangle("#FF0000", this.position, this.size);
  }
}
