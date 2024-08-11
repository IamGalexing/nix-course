export class Vector {
  public x: number;
  public y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  add(other: Vector) {
    this.x = this.x + other.x;
    this.y = this.y + other.y;
  }

  copy() {
    return new Vector(this.x, this.y);
  }
}
