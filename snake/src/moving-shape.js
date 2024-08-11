import { Direction } from "./constants.js";
import { Shape } from "./shape.js";
import { Vector } from "./vector.js";

export class MovingShape extends Shape {
  #velocity;

  constructor(position, velocity) {
    super(position);
    this.#velocity = velocity;
  }

  update() {
    this.position.add(this.#velocity);
  }

  set direction(newDirection) {
    const velocityMap = {
      [Direction.UP]: new Vector(0, -5),
      [Direction.DOWN]: new Vector(0, 5),
      [Direction.LEFT]: new Vector(-5, 0),
      [Direction.RIGHT]: new Vector(5, 0),
    };

    const newVelocity = velocityMap[newDirection];

    if (newVelocity !== undefined) {
      this.#velocity = newVelocity;
    }
  }
}
