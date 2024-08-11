export class CollisionSystem {
  constructor() {
    this.threshold = 10;
  }

  check(sprites) {
    const collisions = new Set();

    sprites.forEach((item) => {
      sprites.forEach((other) => {
        if (other !== item && this.isOverLapping(other, item)) {
          collisions.add(item);
        }
      });
    });

    return collisions;
  }

  isOverLapping(one, two) {
    const diffX = Math.abs(one.position.x - two.position.x);
    const diffY = Math.abs(one.position.y - two.position.y);

    return diffX < this.threshold && diffY < this.threshold;
  }
}
