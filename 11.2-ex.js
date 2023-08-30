const nums = [10, 20, 30];
nums[2] = 99;
console.log(nums);

// An alternative solution is:
// nums[nums.length - 1] = 99;

function getLastValue(array) {
  const lastIndex = array.length - 1;
  return array[lastIndex];
}
console.log(getLastValue([1, 20, 22, 24, 5]));
console.log(getLastValue(["hi", "hello", "hey"]));

function arraySwap(array) {
  const lastIndex = array.length - 1;

  // We need to save the values first before
  // swapping. Otherwise, if we swap directly,
  // we would lose one of the values.
  const lastValue = array[lastIndex];
  const firstValue = array[0];

  array[0] = lastValue;
  array[lastIndex] = firstValue;

  return array;
}
console.log(arraySwap([1, 20, 22, 24, 5]));
console.log(arraySwap(["hi", "hello", "hey"]));

for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

for (let i = 5; i >= 0; i--) {
  console.log(i);
}

let i = 0;

while (i <= 10) {
  console.log(i);
  i += 2;
}

i = 5;

while (i >= 0) {
  console.log(i);
  i--;
}

const array = [1, 2, 3];
const result = [];

for (let i = 0; i < array.length; i++) {
  result.push(array[i] + 1);
}

console.log(result);

function addOne(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(array[i] + 1);
  }

  return result;
}

console.log(addOne([1, 2, 3]));
console.log(addOne([-2, -1, 0, 99]));

function addNum(array, num) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(array[i] + num);
  }

  return result;
}

console.log(addNum([1, 2, 3], 2));
console.log(addNum([1, 2, 3], 3));
console.log(addNum([-2, -1, 0, 99], 2));

function addArrays(array1, array2) {
  const result = [];

  for (let i = 0; i < array1.length; i++) {
    result.push(array1[i] + array2[i]);
  }

  return result;
}

console.log(addArrays([1, 1, 2], [1, 1, 3]));
console.log(addArrays([1, 2, 3], [4, 5, 6]));

function countPositive(nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result++;
    }
  }

  return result;
}

console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));

function minMax(nums) {
  // We'll set the starting values of min and max
  // as the first value in the array. (This is
  // just one way to set the starting values. You
  // can use another way if you like.)
  const result = {
    min: nums[0],
    max: nums[0],
  };

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];

    // If the value is less than the min,
    // update the min.
    if (value < result.min) {
      result.min = value;
    }

    // If the value is greater than the max,
    // update the max.
    if (value > result.max) {
      result.max = value;
    }
  }

  return result;
}

console.log(minMax([1, -3, 5]));
console.log(minMax([-2, 3, -5, 7, 10]));

function minMax(nums) {
  // We'll set the starting values of min and max
  // to null this time.
  const result = {
    min: null,
    max: null,
  };

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];

    // If the min is null OR the value is
    // less than the min, update the min.
    if (result.min === null || value < result.min) {
      result.min = value;
    }

    // If the max is null OR the value is
    // greater than the max, update the max.
    if (result.max === null || value > result.max) {
      result.max = value;
    }

    // We have to use 2 if-statements above instead of
    // an if-else statement. This makes sure both the
    // min and max are set if they are null.
  }

  return result;
}

console.log(minMax([1, -3, 5]));
console.log(minMax([-2, 3, -5, 7, 10]));

console.log(minMax([]));
console.log(minMax([3]));

function countWords(words) {
  const result = {};

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    // result[word] adds/accesses a property using whatever is
    // saved inside the 'word' variable.
    // If word = 'apple', result[word] will do result['apple']
    // If word = 'grape', result[word] will do result['grape']
    if (!result[word]) {
      result[word] = 1;
    } else {
      result[word]++;
    }
  }

  return result;
}

console.log(countWords(["apple", "grape", "apple", "apple"]));

//part 2

function isSearchInsideArray(array, word) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      return i;
    }
  }
  return -1;
}

console.log(
  isSearchInsideArray(["nayan", "jobu", "search", "bedant", "search"], "bedant")
);
console.log(
  isSearchInsideArray(["search", "nayan", "jobu", "bedant"], "nayan")
);
console.log(
  isSearchInsideArray(["search", "search", "nayan", "jobu", "bedant"], "search")
);

console.log(isSearchInsideArray(["nayan", "jobu", "bedant"], "sahil"));

function removeEgg(foods) {
  const result = [];
  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === "egg") {
      continue;
    }
    result.push(foods[i]);
  }
  return result;
}
console.log(removeEgg(["egg", "apple", "egg", "egg", "ham"]));

function removeEgg1(foods) {
  const result = [];
  let eggsRemoves = 0;
  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === "egg" && eggsRemoves < 2) {
      eggsRemoves++;
      continue;
    }
    result.push(foods[i]);
  }
  return result;
}
console.log(removeEgg1(["egg", "apple", "egg", "egg", "ham"]));

function removeEgg1(foods) {
  const result = [];
  let eggsRemoves = 0;
  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === "egg" && eggsRemoves < 2) {
      eggsRemoves++;
      continue;
    }
    result.push(foods[i]);
  }
  return result;
}
console.log(removeEgg1(["egg", "apple", "egg", "egg", "ham"]));

function removeEgg(foods) {
  // To prevent modifying the original array, we
  // just need to create a copy using .slice()
  const foodsCopy = foods.slice();
  const reversedFoods = foodsCopy.reverse();

  // We can also write the code in 1 line since
  // .slice() results in an array, which means
  // we can use .reverse() on the result directly.
  // This is called "method chaining".
  /*
  const reversedFoods = foods.slice().reverse();
  */

  const result = [];
  let eggsRemoved = 0;

  for (let i = 0; i < reversedFoods.length; i++) {
    if (foods[i] === "egg" && eggsRemoved < 2) {
      eggsRemoved++;
      continue;
    }

    result.push(foods[i]);
  }

  return result;
}

const foods = ["egg", "apple", "egg", "egg", "ham"];
console.log(removeEgg(foods));
console.log(foods);

for (let i = 0; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

function findIndex(array, word) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      return i;
    }
  }

  return -1;
}

function unique(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const word = array[i];

    // Using the findIndex() function from above, we
    // can check if the string is already in the
    // result array. If it's not in the result array
    // (index is -1), then add it to the result array.
    if (findIndex(result, word) === -1) {
      result.push(word);
    }
  }

  return result;
}

console.log(unique(["green", "red", "blue", "red"]));
console.log(unique(["red", "green", "green", "red"]));
