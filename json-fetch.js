//  =====================1. JSON======================
const student = {
    name: 'shakib khan',
    age: 34,
    movies: ['baabai', 'tokai', 'dhakar mastan', 'number one']
}
const studentJSON = JSON.stringify(student)
// console.log(studentJSON)
const studentParse = JSON.parse(studentJSON)
// console.log(studentParse);

//  ======================2. fetch=====================
/* fetch('url')
    .then(response => response.json())
    .then(data => console.log(data)) */

//===============  3. object keys, values===============
const keys = Object.keys(student);
const values = Object.values(student);
// console.log(keys, values) 

//  =================3.  for=========================
const numbers = [23, 55, 77, 88, 44, 78]
// numbers.forEach(num => console.log(num))  //23 55 77 88 44 78
const newNumbers = numbers.map(num => num * 2)
// console.log(newNumbers)  //[ 46, 110, 154, 176, 88, 156 ]
/* 
1.1 for of on array like object
1.2 for in apply on object
*/
// add or remove from an array
const products = [
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'white' },
    { name: 'mobile', price: 2200, brand: 'iPhone', color: 'golden' },
    { name: 'watch', price: 2000, brand: 'apple', color: 'blue' },
    { name: 'camera', price: 5200, brand: 'samsung', color: 'black' }]
// copy products array and then add newProduct & create new array
const newProduct = { name: 'webcam', price: 700, brand: 'lal' }
const newProducts = [...products, newProduct];
// console.log(newProducts)
/* =======================================================================
create new array without one specific item 
remove phones means create new array without the phone
=========================================================================
*/
const remainiing = newProducts.filter(p => p.name !== 'phone')
console.log(remainiing)
