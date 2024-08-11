import { renderer } from "./renderer.js";
import { Shape } from "./shape.js";

export class Circle extends Shape {
  constructor(position, radius) {
    super(position);

    this.radius = radius;
  }

  draw() {
    renderer.drawCricle("#FF0000", this.position, this.radius);
  }
}
