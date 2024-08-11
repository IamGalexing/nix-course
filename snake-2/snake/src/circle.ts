import { renderer } from "./renderer";
import { Shape } from "./shape";
import { Vector } from "./vector";

export class Circle extends Shape {
  private radius: number;

  constructor(position: Vector, radius: number) {
    super(position);

    this.radius = radius;
  }

  draw() {
    renderer.drawCricle("#FF0000", this.position, this.radius);
  }
}
