const Direction = {
  UP: "up",
  DOWN: "down",
  LEFT: "left",
  RIGHT: "right",
};

const KeyCode = {
  ArrowUp: "ArrowUp",
  ArrowDown: "ArrowDown",
  ArrowLeft: "ArrowLeft",
  ArrowRight: "ArrowRight",
};

class Renderer {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.initCanvas();
    this.initSize();
  }

  initCanvas() {
    this.canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");
  }

  initSize() {
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  drawRectangle(color, position, size) {
    renderer.ctx.fillStyle = color;
    renderer.ctx.fillRect(position.x, position.y, size.x, size.y);
  }

  drawCircle(color, position, radius) {
    this.ctx.fillStyle = color;
    this.ctx.beginPath();
    this.ctx.arc(position.x, position.y, radius, 0, 2 * Math.PI, false);
    this.ctx.fill();
  }
}

const renderer = new Renderer(500, 200);

class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(other) {
    this.x += other.x;
    this.y += other.y;
  }

  copy() {
    return new Vector(this.x, this.y);
  }
}

class Shape {
  #velocity;

  constructor(position, velocity) {
    this.position = position;
    this.#velocity = velocity;
  }

  update() {
    this.position.add(this.#velocity);
  }

  draw() {
    throw "draw not implemented";
  }

  set direction(newDirection) {
    const velocityMap = {
      [Direction.UP]: new Vector(0, -1),
      [Direction.DOWN]: new Vector(0, 1),
      [Direction.LEFT]: new Vector(-1, 0),
      [Direction.RIGHT]: new Vector(1, 0),
    };

    const newVelocity = velocityMap[newDirection];

    if (newVelocity !== undefined) {
      this.#velocity = newVelocity;
    }
  }
}

class Rectangle extends Shape {
  constructor(position, size, velocity) {
    super(position, velocity);
    this.size = size;
  }

  draw() {
    renderer.drawRectangle("red", this.position, this.size);
  }

  copy() {
    return new Rectangle(
      this.position.copy(),
      this.size.copy(),
      this.velocity.copy()
    );
  }
}

class Circle extends Shape {
  constructor(position, radius, velocity) {
    super(position, velocity);
    this.radius = radius;
  }

  draw() {
    renderer.drawCircle("red", this.position, this.radius);
  }
}

const size = new Vector(10, 10);

const rect1 = new Rectangle(new Vector(0, 0), size, new Vector(1, 0));
// const rect2 = new Rectangle(new Vector(450, 0), size, new Vector(-1, 0));
// const circle = new Circle(new Vector(125, 25), 10, new Vector(0, 1));

class Controls {
  constructor(callback) {
    window.addEventListener("keydown", (event) => {
      const eventMap = {
        [KeyCode.ArrowUp]: Direction.UP,
        [KeyCode.ArrowDown]: Direction.DOWN,
        [KeyCode.ArrowLeft]: Direction.LEFT,
        [KeyCode.ArrowRight]: Direction.RIGHT,
      };

      const direction = eventMap[event.key];

      if (direction !== undefined) {
        callback(direction);
      }
    });
  }
}

const controls = new Controls((direction) => {
  rect1.direction = direction;
});

class Snake {
  constructor() {
    this.velocity = new Vector(1, 0);

    const length = 5;
    this.body = [];
    const size = new Vector(10, 10);

    for (let i = 0; i < length; i++) {
      const y = 50 + i * size.x;
      const position = new Vector(10, y);
      const velocity = new Vector(0, 0);
      const cell = new Rectangle(position, size, velocity);
      this.body.push(cell);
    }
  }

  update() {
    const prevHead = this.body[0];
    const newHead = prevHead.copy();

    newHead.position.add(this.velocity);

    this.body.push(newHead);
  }

  draw() {
    this.body.forEach((cell) => cell.draw());
  }
}

const snake = new Snake();

const sprites = [rect1, snake];

setInterval(() => {
  renderer.clear();

  sprites.forEach((sprite) => {
    sprite.update();
    sprite.draw();
  });
}, 20);
