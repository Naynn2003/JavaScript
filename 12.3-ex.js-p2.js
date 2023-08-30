const multiply = (x,y) => {
  return x*y;
}
console.log(multiply(2,3));


const multiply1 = (a, b) => a * b;
console.log(multiply1(3, 3));

function countPositive(nums) {
  let count = 0 ;
  nums.forEach(num => {
    if (num > 0) {
      count ++;

    }
  });
  return count

}
console.log(countPositive([1,-1]));

function adddNum(array,num) {
  return array.map((value) => value + num);
}
console.log(adddNum([1,2,3],2));

function removeEgg(foods) {
  return foods.filter((food) => fodd != 'egg');
};

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));

function removeEgg(foods) {
  let eggsRemoved = 0;

  return foods.filter((food) => {
    // If the food is 'egg', we should return false
    // but only if we haven't removed 2 eggs already.
    if (food === 'egg' && eggsRemoved < 2) {
      eggsRemoved++;
      return false;
    }

    return true;
  });
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));






