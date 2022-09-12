/* 
1. truthy: 'almas', 5, true, {}, [] etc
2. falsy: '', 0, false, null, undefined
*/
// check any truthy
let myVar = 5;
if (myVar) {
    console.log(myVar)
}
else {
    myVar = 0;
}
// check any falsy
let myMoney = 150;
let food;
if (!myMoney) { console.log(myMoney) }
const money = 80;
if (money > 100) { food = 'biriyani' }
else { food = 'cha biscuit' }
// ternary operator
let food1 = money > 100 ? 'biriyani' : 'cha biscuit'
// ternary operator with multiple condition
let drink = (myMoney > 100 && myVar > 200) ? 'coke' : 'sada pani'
//=========== number to string convertion===========
const num1 = 52;
const numStr = num1 + '';
// ========string to number shortcut===========
const numberStr = "1000";
const number = +numberStr;
// ===============
const isActive = true;
const showUser = () => console.log('display user');
const hidUser = () => console.log('hide user')
isActive ? showUser() : hidUser();
// use && if the left side is true then right side will exucuted
isActive && showUser();
// use || if the left side is false then right side will execute
isActive || hidUser();
//  toggle : convert reverse truthy to falsy or falsy to truthy
isActive = !isActive;