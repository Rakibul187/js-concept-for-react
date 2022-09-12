/*
// 1. template string
const numbers = [33, 66, 99, 66, 33]
const student = {
    name: 'shakib khan',
    age: 34,
    movies: ['baabi', 'tokai', 'dhakar mastan', 'number 1']
}
const about = `my name is ${student.name} 
my age is ${student['age']}
my this first movie is ${student.movies[0]}
my last 2years total movies ${numbers[2]}`
console.log(about) */

/* // 2. arrow function
const add = (a, b) => a + b;
const multiply = (c, d) => c * d;
const isEven = num1 => num1 % 2 === 0;
const person = () => console.log('who are you?'); */

// 2. spread operators (...)
const numbers = [33, 66, 99, 66, 33];
const newNumbers = [...numbers];
numbers.push(22);
const currentNumbers = [...numbers, 100, 200];
console.log(numbers);  //[ 33, 66, 99, 66, 33, 22 ]
console.log(newNumbers);  //[ 33, 66, 99, 66, 33 ]
console.log(currentNumbers)  //[33, 66,  99,  66,33, 22, 100, 200]
