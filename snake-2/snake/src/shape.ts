import { Vector } from "./vector";

export class Shape {
  private _position: Vector;

  constructor(position: Vector) {
    this._position = position;
  }

  draw() {
    throw "draw not implemented";
  }

  get position() {
    return this._position;
  }

  set position(value: Vector) {
    this._position = value;
  }
}
