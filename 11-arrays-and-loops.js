const myArray = [10, 20, 30];
console.log(myArray);

console.log(myArray[1]);
myArray[0] = 99;
console.log(myArray);

[1, "hello", true, { name: "socks" }, [1, 2]];

console.log(typeof [1, 2]);
console.log(Array.isArray([1, 2]));

console.log(myArray.length);

myArray.push(100);
console.log(myArray);

myArray.splice(0, 1);
console.log(myArray);

let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

let randomNumber = 0;

while (randomNumber < 0.5) {
  randomNumber = Math.random();
}

console.log(randomNumber);

const todoList = ["make dinner", "wash dishes", "watch youtube"];

for (let i = 0; i < todoList.length; i++) {
  const value = todoList[i];
  console.log(value);
}

const nums = [1, 1, 3];
let total = 0;

for (let i = 0; i < nums.length; i++) {
  const num = nums[i];
  total += num;
}
console.log(total);

const numsDoubled = [];

for (let i = 0; i < nums.length; i++) {
  const num = nums[i];
  numsDoubled.push(num * 2);
}
console.log(numsDoubled);

//just like objects arrays are also references

const array1 = [1, 2, 3];
//this array1 var is stored somewhere in comp memory and contaisn only reference that points to whre this array is

const array2 = array1;
//array2 doesnt contain the copy of the values it actually contains the refence means both the vars hve same reference pointing to the array

array2.push(2);
console.log(array2);
console.log(array1);
//both will be modified

//we can creat the copy of the values to avoid this behaviour

const array3 = array1.slice(); //copies the value and both array have diffent ref and same value
array3.push(4); //will modify only array3

//shortcut : destructuring

const array4 = [1, 2, 3];

const [fv, sv, tv] = [2, 3, 4]; //destructuing , unpacking an array

//BREAK AND CONTINUE

for (let i = 1; i < 11; i++) {
  if (i ===3) {
    break;  //when i = 3 loop will terminate
  }
  
  console.log(i);
}


for (let i = 1; i < 11; i++) {
  if (i ===3) {
    continue; // it will skip the iteration of i==3
  }
  
  console.log(i);
}

for (let i = 1; i < 11; i++) {
  if (i % 3 ===0) {
    continue; // it will skip the numbers divisible 3
  }
  
  console.log(i);
}