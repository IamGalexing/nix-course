import { KeyCode, Direction } from "./constants";

type Listener = (value: Direction) => void;

export class Controls {
  private listener?: Listener;

  constructor() {
    window.addEventListener("keydown", (event) => {
      const eventMap = {
        [KeyCode.ArrowUp]: Direction.UP,
        [KeyCode.ArrowDown]: Direction.DOWN,
        [KeyCode.ArrowRight]: Direction.RIGHT,
        [KeyCode.ArrowLeft]: Direction.LEFT,
      };

      const direction = eventMap[event.key as KeyCode];

      if (direction !== undefined) {
        this.listener?.(direction);
        // callback(direction);
      }
    });
  }

  subscribe(listener: Listener) {
    this.listener = listener;
  }
}
