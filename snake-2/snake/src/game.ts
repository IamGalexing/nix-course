import { Circle } from "./circle";
import { Snake } from "./snake";
import { Vector } from "./vector";
import { renderer } from "./renderer";
import { Controls } from "./controls";
import { Direction } from "./constants";
import { CollisionSystem } from "./collision-system";
import { VectorUtils } from "./vector-utils";
import { MovingShape } from "./moving-shape";

export class Game {
  private collisionSystem = new CollisionSystem();
  private snake = new Snake();
  private food: Array<Circle> = [];
  private controls = new Controls();

  constructor() {
    this.initSprites();
    this.initControls();
  }

  initSprites() {
    const food1 = new Circle(new Vector(150, 150), 2.5);
    this.food = [food1];
  }

  initControls() {
    this.controls.subscribe((direction) => {
      console.log(direction);
      this.snake.direction = direction;
    });
  }

  handleCollisions() {
    const collisions = this.collisionSystem.check(this.sprites);

    if (collisions.size < 1) {
      return;
    }

    this.snake.grow();
    this.food = this.food.filter((item) => !collisions.has(item));

    this.generateFood();
  }

  generateFood() {
    const postion = VectorUtils.getRandom();
    const food = new Circle(postion, 2.5);

    this.food.push(food);
  }

  get sprites() {
    return [...this.food, this.snake];
  }

  start() {
    setInterval(() => {
      renderer.clear();

      this.sprites.forEach((sprite) => {
        if (sprite instanceof MovingShape) {
          sprite.update();
        }

        sprite.draw();
      });

      this.handleCollisions();
    }, 50);
  }
}
