const log = console.log;

const person = {
  age: 30,
};

const student = person;
student.name = "Adam";
console.log(student);

const teacher = Object.assign(Object.create({}), person); // OR Object.assign({}, person);
teacher.name = "Rick";
teacher.age = 20;
console.log(teacher);

const principal = { ...person, name: "Rock" };
Object.defineProperty(principal, "occupation", {
  value: "principal",
  enumerable: true, // this makes this property visible during enumeration like below
  configurable: false, // this prevents deletion
  writable: false, // this prevents overriding/assigning new value
});
//delete principal.occupation;
//principal.occupation = "asdf";
console.log(principal);

const parent = Object.create(person);
console.log(parent.age);

console.log(
  "student ",
  student,
  "\nteacher",
  teacher,
  "\nprincipal",
  principal
);

console.log(student === teacher); // Object.assign creates a new object
console.log(student === principal); // Object.assign creates a new object
console.log(parent === person); // Object.create creates a new object
console.log(student === person); // = just creates a new variable with same reference to the object

const x = "howdy";
const obj = {
  [x]: 23,
  username: "Jeff",
  hello() {
    console.log(this.username); // won't work if defined with arrow function
  },
};
log(obj);
obj.hello();

const game = {
  hitpoints: 100,
  log() {
    console.log(`👾 ${this.hitpoints}`);
  },
  takeDamage() {
    this.hitpoints -= 10;
    this.log();
    return this; // Required for chaining
  },
  heal() {
    this.hitpoints += 10;
    this.log();
    return this; // Required for chaining
  },
};

game.takeDamage().takeDamage().takeDamage().heal();

function Boat(name) {
  this.name = name;
  this.created = Date.now();

  this.horn = function () {
    console.log(this.name);
  };
}
const sally = new Boat("Sally");
const molly = new Boat("Molly");

log(sally);
sally.horn();

////////////////////////
fun(); // works.
function fun() {
  log("hoisting");
}

//fun1();
const fun1 = () => {
  log("not hoisting");
};

function outer() {
  let count = 0; // persits in memory after outer is popped off the call stack

  function inner() {
    count++;
    return count;
  }

  return inner;
}

// Creates the Closure
const addOne = outer();

// Operates within its context or lexical environment
log(addOne()); // 1
log(addOne()); // 2
log(addOne()); // 3

const useCat = () => {
  let name = "kittie";

  return [() => `Meow ${name}`, (newName) => (name = newName)];
};
const [meow, setName] = useCat();

log(meow());
setName("cat");
log(meow());

const makeBeer = function (qty) {
  return "🍺".repeat(qty);
};

const makeWine = (qty) => "🍷".repeat(qty);

log(makeBeer(3));
log(makeWine(3));

((qty) => {
  console.log("☕".repeat(qty));
})(20);

(function (qty) {
  console.log("☕".repeat(qty));
})(10);

setTimeout(fun1, 2000);
log([1, 2, 3, 4].map((v) => v ** 2));
log([1, 2, 3, 4].filter((v) => v % 2 !== 0));
log(
  [1, 2, 3, 4].reduce(
    (accumulator, current_value, current_index, source_array) => {
      log(
        `accumulator ${accumulator}, current_value ${current_value}, current_index ${current_index}, source_array ${source_array}`
      );
      return accumulator + current_value;
    }
  )
);

const fs = require("fs");
const { join } = require("path");

const traverse = (dir) => {
  const subfolders = fs.statSync(dir).isDirectory() && fs.readdirSync(dir);
  log("subfolders", subfolders);

  if (subfolders) {
    console.log("👟👟👟 Traversing ", dir);

    subfolders.forEach((path) => {
      const fullPath = join(dir, path);

      traverse(fullPath);
    });
  }
};

traverse(process.cwd());

console.count("hi");
console.count("hi");
console.count("hi");

/// Difference between
const CircleUsingArrowFunction = (radius) => {
  console.log("this", this);
  this.radius = radius;
  this.draw = function () {
    console.log("circle");
  };
};

function CircleUsingCunstructor(radius) {
  console.log("this", this);
  this.radius = radius;
  this.draw = function () {
    console.log("circle");
  };
}

console.log(
  "circleUsingArrowFunction ",
  CircleUsingArrowFunction(1),
  " circleUsingCunstructor ",
  new CircleUsingCunstructor(1)
);

const { pizza, cupcake } = require("./awesome-package");
const defaultObj = require("./awesome-package").default;
log(pizza);
log(defaultObj);

const { readFile, writeFile } = require("fs").promises;

async function hello() {
  const file = await readFile("./fibonacci.js", "utf-8");
  console.log("file", file);
}
hello();
