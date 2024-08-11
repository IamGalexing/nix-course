import { renderSize } from "./constants";
import { Vector } from "./vector";

export class VectorUtils {
  static getRandom() {
    const x = VectorUtils.getRandomCoordinate(renderSize.width);
    const y = VectorUtils.getRandomCoordinate(renderSize.height);

    return new Vector(x, y);
  }

  static getRandomWithMax(max: number) {
    return max * Math.random();
  }

  static round5(x: number) {
    return Math.ceil(x / 5) * 5;
  }

  static getRandomCoordinate(dimension: number) {
    return VectorUtils.round5(VectorUtils.getRandomWithMax(dimension));
  }
}
