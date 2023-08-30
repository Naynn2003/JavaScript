// section3 variables in js
let todo1 = 99;

let month = 'november'
let dayofmonth = 9
let year = 2023

console.log(typeof todo1);

console.log(month, dayofmonth, ',', year);

let result1 = 4 + 5 * 3;
console.log(result1);   // Result is: 19
let result2 = (4 + 5) * 3;
console.log(result2);   // Result is: 27

let age = 25;
let message = 'I am ' + age + ' years old';
console.log(typeof message);    // Result is: "string".
// Combining a string and a number results in a string.
// some functions

function greetings(fname) {
  console.log('hello', fname);
}

greetings('Nayan')

function toupper(mystring) {
  a = mystring.toUpperCase();
  console.log(a)
}
toupper('hello ,i am nayan');
// inch to cm conert
function inchTOcemi(length) {
  cemi = length * 2.54
  console.log(cemi)
}
inchTOcemi(5)
// lowercase function (inbuilt)
console.log("NAYAN".toLowerCase())

// to print the items of a list array in js with for loop
let todos = ['Get Groceries', 'Wash Car', 'Make Dinner'];
todos.push('another todo');

todos.forEach(function (todoTitle) {
  console.log(todoTitle)

});
// Write a function toUpper that takes 1 parameter, an array of strings, and console.
// logs a new array with all the strings capitalized.
function toUpper(stringArr) {
  let result = [];

  stringArr.forEach(function (str) {
    result.push(str.toUpperCase());
  });

  console.log(result);
}
toUpper(['hello', 'world']);

// Write a function arrayDouble that takes an array and console.
// logs a new array with every value repeated twice.
function arraydouble(myary) {
  doubled = []
  myary.forEach(function (i) {
    doubled.push(i)
    doubled.push(i)
  });
  console.log(doubled);
}
arraydouble(['nayan','prajapati'])

// Write a function arraySum that takes an array of numbers and console.
// logs the sum of the numbers. 

function arraysum(myarry){
  let total=0;
  myarry.forEach(function(i){
    total = total + i
  })
  console.log(total);
}
arraysum([1,2,3,4,5])

/*Write a function cartTotal that takes an array of objects cartArray where each object contains a name, price, and quantity. 
console.log the total price of the items in the cart. For example*/ 

function cartTotal(cartArray) {
  let total = 0;

  cartArray.forEach(function (item) {
    total = total + item.price * item.quantity;
  });

  console.log(total);
}
cartTotal([
  { name: 'Apple', price: 4, quantity: 2 },
  { name: 'Orange', price: 3, quantity: 3 }
]);

/*Create a <div id="receipt"></div>. Write a function displayReceipt that takes the same array of objects as exercise 1 and display a receipt using these steps:

Reset <div id="receipt"> to be empty using .innerHTML
For each object in the array, add a line to the receipt in this format: <div>Apple $4 * 2 = $8</div>
At the bottom, display the total: <div>Cart total = $17</div> */
