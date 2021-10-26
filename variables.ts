let apple = 5;
let apples: number = 5;
apples = 7;

const dogs: number = 5;

let speed: string = 'fast';
let nothingMuch: null = null;
let nothing: undefined = undefined;

let now: Date = new Date();
let colors: string[] = ['red', 'orange', 'blue'];
let num: number[] = [1, 2, 3];
let flag: boolean[] = [true, false, true];

//class type
class Car {}

let car: Car = new Car();

//Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//Function
const logNumber = (i: number): void => {
  console.log(i);
};

//when to use annotations
//1) function that returns the 'any' type
const json = '{"x" : 10, "y" : 20}';
const coordinates = JSON.parse(json);
console.log(coordinates);

let words = ['red', 'orange', 'blue'];
let foundWord;
//let foundWord : boolean;

//2) when we declare a variable on one line then initialze it later
for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

//3) variable whose type cannot be inferred correctly

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
