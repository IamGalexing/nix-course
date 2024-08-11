import { Shape } from "./shape";

export class CollisionSystem {
  private threshold = 10;

  constructor() {}

  check(sprites: Shape[]) {
    const collisoins = new Set();

    sprites.forEach((item) => {
      sprites.forEach((other) => {
        if (other !== item && this.isOverlapping(other, item)) {
          collisoins.add(item);
        }
      });
    });

    return collisoins;
  }

  isOverlapping(one: Shape, two: Shape) {
    const diffX = Math.abs(one.position.x - two.position.x);
    const diffY = Math.abs(one.position.y - two.position.y);

    return diffX < this.threshold && diffY < this.threshold;
  }
}
