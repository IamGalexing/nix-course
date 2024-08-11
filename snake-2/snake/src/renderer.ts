import { Vector } from "./vector";

class Renderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  constructor(private width: number, private height: number) {
    // this.width = width;
    // this.height = height;
    this.canvas = this.initCanvas();
    this.ctx = this.initCtx();
    this.initCanvas();
    this.initSize();
  }

  initCanvas(): HTMLCanvasElement {
    const canvas = document.getElementById("canvas");

    if (canvas === null) {
      throw "Can't find canvas!";
    }

    return canvas as HTMLCanvasElement;
  }

  initCtx() {
    const ctx = this.canvas.getContext("2d");

    if (ctx === null) {
      throw "Can't find canvas!";
    }

    return ctx as CanvasRenderingContext2D;
  }

  initSize() {
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  drawRectangle(color: string, position: Vector, size: Vector) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(position.x, position.y, size.x, size.y);
  }

  drawCricle(color: string, position: Vector, radius: number) {
    this.ctx.fillStyle = color;
    this.ctx.beginPath();
    this.ctx.arc(position.x, position.y, radius, 0, 2 * Math.PI, false);
    this.ctx.fill();
  }
}

export const renderer = new Renderer(500, 200);
