// Problem Statement #
// Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.
// Input: [1, 2, 3, 4, 6], target=6
// Output: [1, 3]
// Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6

function twoSum(value,target){
let left = 0;
let right = value.length - 1;

while(left < right){

    if(value[left] + value[right] === target){
        return [left,right]
    }

    if(value[left] + value[right] > target){
        right--
    }else{
        left++
    }
}
return [-1,-1]
}
const res = twoSum([2, 5, 9, 11],11)
console.log(res)