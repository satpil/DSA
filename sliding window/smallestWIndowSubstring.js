// Given a string and a pattern, find the smallest substring in the given string which has all the characters of the given pattern.
// Input: String="aabdec", Pattern="abc"
// Output: "abdec"
// Explanation: The smallest substring having all characters of the pattern is "abdec"

function smallestWindowSubstring (value,pattern){
let char = new Map();
let minLen = value.length + 1;
let subStr = 0;
let windowStart = 0;
let matched = 0;

for(let i=0;i < pattern.length;i++){
    if(char.has(pattern[i])){
        char.set(pattern[i],char.get(pattern[i])+1)
    }else{
        char.set(pattern[i],1)
    }
}

for(let j=0; j < value.length;j++){
    if(char.has(value[j])){
        char.set(value[j],char.get(value[j])-1);

        if(char.get(value[j]) >= 0){
           matched++
        }
    }


while(matched === pattern.length){
    if(minLen > j - windowStart + 1){
        minLen = j - windowStart + 1;
        subStr = windowStart;
    }

    const leftChar = windowStart;
    windowStart++;

    if(char.has(value[leftChar])){
        if(char.get(value[leftChar]) === 0){
            matched--
        }
        char.set(value[leftChar],char.get(value[leftChar])+1);
    }
}
}
if(minLen > value.length){
  return ''
}
return value.substring(subStr,subStr+minLen);

}
const res = smallestWindowSubstring('abdabca','abc')
console.log(res)