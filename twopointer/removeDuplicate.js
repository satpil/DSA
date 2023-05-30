// Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the new length of the array.
// Input: [2, 3, 3, 3, 6, 9, 9]
// Output: 4
// Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].

function removeDublicate(value){
let current = 0;
let i = 1;
while(i < value.length){

    if(value[current] != value[i]){
        current++
        value[current] = value[i]
    }

    i++
}
return current+1
}
const res = removeDublicate([2, 3, 9])
console.log(res)