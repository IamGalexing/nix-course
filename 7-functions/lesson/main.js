console.log("working");

formatName("Alex");

function formatName(name, prefix = "") {
  //   const prefix = "dr.";
  // const prefix = prefix ?? "";
  console.log("hi ", prefix + name);
}

// class Controls {
//   constructor(listener) {
//     this.listener = listener;
//     this.initEventListener();
//   }

//   initEventListener() {
//     const button = document.getElementById("event-trigger");
//     button.addEventListener("click", () => {
//       this.listener?.();
//     });
//   }
// }

// const controls = new Controls(() => {
//   console.log("button clicked!");
// });

class Subject {
  constructor() {
    this.listeners = [];
  }

  subscribe(callback) {
    this.listeners.push(callback);
  }

  next() {
    this.listeners.forEach((listener) => {
      listener();
    });
    if (this.listener) {
      this.listener();
    }
  }
}

const buttonEvent = new Subject();

buttonEvent.subscribe(() => {
  console.log("sub - button clicked!");
});

buttonEvent.subscribe(() => {
  console.log("sub2 - button clicked!");
});

buttonEvent.subscribe(() => {
  console.log("sub3 - button clicked!");
});

const button = document.getElementById("event-trigger");
button.addEventListener("click", () => {
  buttonEvent.next();
});

function* Generator() {
  yield "one";
  yield "two";
  yield "three";
}

const gen = Generator();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
