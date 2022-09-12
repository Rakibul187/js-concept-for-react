// 1. how to declare a variable . using let & const.
const fatherName = 'satter';
let season = 'rainy';
season = "winter";

/* 2
2.1  basic condition : >, < , ===, >=, <=, !== 
2.2  multiple condition: &&, ||
*/
if (fatherName === 'satter' && season === 'summer') {
    console.log('You Are Welcome!')
}
else if (fatherName === 'satter' || season === 'moonson') {
    console.log('You Are Welcome Too!')
}
else {

}
// 3. array 
const number = [33, 66, 99, 66, 33]

// 4. loop
const numbers = [1, 5, 7, 8, 9, 5, 66]
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i]
    console.log(number)
}

// 5. function
function multiply(num1, num2) {
    const result = num1 * num2;
    return result;
}
const output = multiply(10, 30)
console.log(output)

// 6. object & accessing property
const student = {
    name: 'shakib khan',
    age: 34,
    movies: ['baabi', 'tokai', 'dhakar mastan', 'number 1']
}
console.log(student.name) //via direct property name ===shakib khan
console.log(student['age']) // via property name string ===34
const abc = 'age';
console.log(student[abc])  // via variable  ===34
