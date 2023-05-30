// Given an array of unsorted numbers, find all unique triplets in it that add up to zero.


function threeSum(value){
let arr = [];
let sortValue = value.sort((a,b) =>  a-b)
for(let i=0;i < sortValue.length;i++){
    if(i > 0 && sortValue[i] === sortValue[i - 1]){
     continue
    }
  let first = i;
  let left = i + 1;
  let right = sortValue.length - 1;

  while(left < right){
    if(sortValue[first]+sortValue[left]+sortValue[right] > 0){
       right--
    }else if(sortValue[first]+sortValue[left]+sortValue[right] < 0){
        left++
    }else{
        arr.push([sortValue[first],sortValue[left],sortValue[right]])
        left++;
        right--;
        while(left < right && sortValue[left] === sortValue[left - 1]){
            left++
        }
        while(left < right && sortValue[right] === sortValue[right + 1]){
            right--
        }
    }
  }

}
return arr
}
const res = threeSum([-3, 0, 1, 2, -1, 1, -2])
console.log(res)
