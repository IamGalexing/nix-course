export class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(other) {
    this.x = this.x + other.x;
    this.y = this.y + other.y;
  }

  copy() {
    return new Vector(this.x, this.y);
  }
}
