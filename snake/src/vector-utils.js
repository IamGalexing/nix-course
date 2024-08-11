import { renderSize } from "./constants.js";
import { Vector } from "./vector.js";

export class VectorUtils {
  static getRandom() {
    const x = VectorUtils.getRandomCoordinate(renderSize.width);
    const y = VectorUtils.getRandomCoordinate(renderSize.height);

    return new Vector(x, y);
  }

  static getRandomWithMax(max) {
    return max * Math.random();
  }

  static round5(x) {
    return Math.ceil(x / 5) * 5;
  }

  static getRandomCoordinate(dimention) {
    return VectorUtils.round5(VectorUtils.getRandomWithMax(dimention));
  }
}
