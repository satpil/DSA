// Problem Statement #
// Given an array of characters where each character represents a fruit tree, you are given two baskets and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.

// Input: Fruit=['A', 'B', 'C', 'A', 'C']
// Output: 3

function maxFruit(fruits) {
  let fruitsObject = new Map();
  let startIndex = 0;
  let maxFruit = 0;
  let maxFruitBasket = 2;
  let fruit = 0;
  for (let i = 0; i < fruits.length; i++) {
    if (fruitsObject.has(fruits[i])) {
      fruitsObject.set(fruits[i], fruitsObject.get(fruits[i]) + 1);
      maxFruit = Math.max(maxFruit, i - startIndex + 1);
    } else {
      fruit++;
      fruitsObject.set(fruits[i], 1);
      while (fruit > maxFruitBasket) {
        if (fruitsObject.size > maxFruitBasket) {
          fruitsObject.set(fruits[startIndex], fruitsObject.get(fruits[startIndex]) - 1);
          if (fruitsObject.get(fruits[startIndex]) === 0) {
            fruitsObject.delete(fruits[startIndex]);
          }
          startIndex++;
        } else {
          maxFruit = Math.max(maxFruit, i - startIndex + 1);
          fruit--;
        }
      }
    }
  }
  return maxFruit;
}


const res = maxFruit(['A', 'B', 'C', 'C', 'B', 'C'])
console.log(res)
