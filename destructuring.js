//================ 1.  array destructuring====================
const numbers = [50, 33, 66, 44, 88, 22]
const a = numbers[0];
const b = numbers[1]
const [num1, num2, ...rest] = numbers;
console.log(num1, num2, rest)  //50 33 [ 66, 44, 88, 22 ]
function boxify(n1, n2) {
    const numbers = [n1, n2]
    return numbers;
}
const output = boxify(20, 40);
const [numb1, numb2] = output;
console.log(numb1, numb2) //20  40

const student = {
    name: 'shakib khan',
    age: 34,
    movies: ['baabai', 'tokai', 'dhakar mastan', 'number 1']
}
const [firstMovie, secondMovie] = student.movies;
console.log(firstMovie, secondMovie) // baabai  tokai
// ================= 2. object destructuring  & optional chaining====================
const { name, age } = { name: 'alu', height: 5.7, job: 'kotkoti beca', age: 16 }
console.log(name, age);  // alu   16
const employee = {
    ide: 'VS code',
    designation: 'developer',
    machine: 'mac',
    language: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'kumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 5000,
            brand: 'apple'
        }
    }
}
const { weight, address } = employee.specification
console.log(weight, address) //67 kumarkhali
const [lang1, lang2] = employee.language;
console.log(lang1, lang2);  //html  css
const { brand, price } = employee?.specification?.watch;
console.log(brand, price);  // apple   5000