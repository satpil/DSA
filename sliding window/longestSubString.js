//Given a string, find the length of the longest substring in it with no more than K distinct characters.

// Input: String="araaci", K=2
// Output: 4

function longestSubstring(){
let maxSub = 0;
let np = new Map();
let startIndex = 0;
let unique = 0;

for(let i = 0;nums < nums.length;i++){
    if(np.has(nums[i])){
       maxSub = Math.max(maxSub,)
    }else{
        unique++
        if(unique > 2){
         return maxSub;
        }
        np.set(nums[i],np.get(nums[i])+1)
    }
}

}
const res = longestSubstring('araaci',2);
console.log(res);