export class Shape {
  #velocity;

  constructor(position) {
    this.position = position;
  }

  draw() {
    throw "draw not implemented";
  }
}
