const products = [
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'white' },
    { name: 'mobile', price: 2200, brand: 'iPhone', color: 'golden' },
    { name: 'watch', price: 2000, brand: 'apple', color: 'blue' },
    { name: 'camera', price: 5200, brand: 'samsung', color: 'black' }]
// 1. map
const product = products.map(product => product);
console.log(product)
const brands = products.map(product => product.brand);
// console.log(brands)   //[ 'lenovo', 'iPhone', 'apple', 'samsung' ]

// 2. forEach
// products.forEach(product => console.log(product))
/* output===  { name: 'laptop', price: 3200, brand: 'lenovo', color: 'white' }
{ name: 'mobile', price: 2200, brand: 'iPhone', color: 'golden' }
{ name: 'watch', price: 2000, brand: 'apple', color: 'blue' }
{ name: 'camera', price: 5200, brand: 'samsung', color: 'black' } */
products.forEach(product => {
    // console.log(product)
    // console.log(product.name)
    // console.log(product.price)
    // console.log(product.brand)
})

// 3. filter
const cheap = products.filter(product => product.price < 5000);
console.log(cheap)
const nameSpecified = products.filter(product => product.name.includes('p'))
// console.log(nameSpecified)

// 4. find
const special = products.find(product => product.name.includes('ap'))
// console.log(special)