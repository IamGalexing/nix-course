import { Direction, KeyCode } from "./constants.js";

export class Controls {
  constructor(callback) {
    window.addEventListener("keydown", (event) => {
      const eventMap = {
        [KeyCode.ArrowUp]: Direction.UP,
        [KeyCode.ArrowDown]: Direction.DOWN,
        [KeyCode.ArrowRight]: Direction.RIGHT,
        [KeyCode.ArrowLeft]: Direction.LEFT,
      };

      const direction = eventMap[event.key];

      if (direction !== undefined) {
        callback(direction);
      }
    });
  }
}
