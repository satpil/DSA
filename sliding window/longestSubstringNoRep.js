//Problem Statement #
// Given a string, find the length of the longest substring which has no repeating characters.

// Input: String="aabccbb"
// Output: 3

function longestSubString(item){
 let stringObject = new Map(); 
 let maxLen = 0;
 let startIndex = 0;

 for(let i=0;i< item.length;i++){
    if(stringObject.has(item[i])){
       startIndex = Math.max(stringObject.get(item[i]) + 1,startIndex)

    }
        stringObject.set(item[i],i);
       maxLen = Math.max(maxLen,i - startIndex+1);


 }
return maxLen
}
const res = longestSubString("abcddaaa");
console.log(res)