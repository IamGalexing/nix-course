import { Snake } from "./snake.js";
import { Vector } from "./vector.js";
import { Circle } from "./circle.js";
import { Controls } from "./controls.js";
import { renderer } from "./renderer.js";
import { CollisionSystem } from "./collision-system.js";
import { VectorUtils } from "./vector-utils.js";

export class Game {
  constructor() {
    this.initSprites();
    this.initControls();
    this.collisionSystem = new CollisionSystem();
  }

  initSprites() {
    this.snake = new Snake();

    const food1 = new Circle(new Vector(150, 150), 2.5, new Vector(0, 0));
    this.food = [food1];
  }

  initControls() {
    const controls = new Controls((direction) => {
      this.snake.direction = direction;
    });
  }

  handleCollisions() {
    const collisions = this.collisionSystem.check(this.sprites);

    if (collisions.size < 1) return;

    this.snake.grow();

    this.food = this.food.filter((item) => !collisions.has(item));

    this.generateFood();
  }

  generateFood() {
    const position = VectorUtils.getRandom();
    const food = new Circle(position, 2.5);

    this.food.push(food);
  }

  get sprites() {
    return [...this.food, this.snake];
  }

  start() {
    setInterval(() => {
      renderer.clear();

      this.sprites.forEach((sprite) => {
        sprite.update?.();
        sprite.draw();
      });

      this.handleCollisions();
    }, 100);
  }
}
