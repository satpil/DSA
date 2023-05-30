//Given a string, find the length of the longest substring in it with no more than K distinct characters.

// Input: String="araaaci", K=2
// Output: 5

function longestSubstring(nums,k){
let maxSub = 0;
let np = new Map();
let startIndex = 0;
let unique = 0;

for(let i = 0;i < nums.length;i++){
    if(np.has(nums[i])){
        np.set(nums[i],np.get(nums[i])+1)

       maxSub = Math.max(maxSub,i-startIndex+1)
    }else{
        unique++
        np.set(nums[i],1)
        while(unique > k){
         if(np.size > k){
            np.set(nums[startIndex],np.get(nums[startIndex])-1)
            if(np.get(nums[startIndex]) === 0){
                np.delete(nums[startIndex])
            }
            startIndex++
         }else{
            unique--
         }
        }
    }
}
return maxSub;

}
const res = longestSubstring('araaaci',2);
console.log(res);