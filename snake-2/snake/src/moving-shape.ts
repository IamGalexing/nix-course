import { Direction } from "./constants";
import { Shape } from "./shape";
import { Vector } from "./vector";

export class MovingShape extends Shape {
  private _velocity;

  constructor(position: Vector, velocity: Vector) {
    super(position);
    this._velocity = velocity;
  }

  update() {
    this.position.add(this._velocity);
  }

  set direction(newDirection: Direction) {
    const velocityMap = {
      [Direction.UP]: new Vector(0, -5),
      [Direction.DOWN]: new Vector(0, 5),
      [Direction.LEFT]: new Vector(-5, 0),
      [Direction.RIGHT]: new Vector(5, 0),
    };

    const newVelocity = velocityMap[newDirection];

    if (newVelocity !== undefined) {
      this._velocity = newVelocity;
    }
  }
}
