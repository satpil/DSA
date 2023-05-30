// Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter, find the length of the longest substring having the same letters after replacement.
// Input: String="aabccbb", k=2
// Output: 5
// Explanation: Replace the two 'c' with 'b' to have a longest repeating substring "bbbbb".


function longestRepChar(string,k){

    let maxRepChar = 0;
    let startIndex = 0;
    let maxLength = 0;
    let frequencyObject = new Map();
    
    for(let i= 0;i < string.length;i++){
        if(frequencyObject.has(string[i])){
            frequencyObject.set(string[i],frequencyObject.get(string[i])+1);
            maxRepChar = Math.max(maxRepChar,frequencyObject.get(string[i]))
        }else{
            frequencyObject.set(string[i],1);
        }
      
        while((i - startIndex +1) - maxRepChar > k){
            frequencyObject.set(string[startIndex],frequencyObject.get(string[startIndex])-1);
            startIndex++
        }
        maxLength = Math.max(maxLength,i-startIndex+1)
    }
    return maxLength
}
const res = longestRepChar('abbcb',1)
console.log(res)