// Given a string and a pattern, find out if the string contains any permutation of the pattern.

// Input: String="oidbcaf", Pattern="abc"
// Output: true
// Explanation: The string contains "bca" which is a permutation of the given pattern.

function permutationString(value, pattern) {
  const char = new Map();
  let totalCount = pattern.length;
  let startIndex = 0;
  let arr = [];
  let matched = 0;
  for (let i = 0; i < pattern.length; i++) {
    if (char.has(pattern[i])) {
      char.set(pattern[i], char.get(pattern[i]) + 1);
      console.log(char)
    }else{
        char.set(pattern[i], 1);
    }
  }

  for (let j = 0; j < value.length; j++) {
    
    if(char.has(value[j])){
        char.set(value[j],char.get(value[j])-1)
        if(char.get(value[j]) == 0){
            matched++
        }
    }

    if(matched == char.size){
            arr.push(startIndex)

        // return true
    }

    if(j >= totalCount - 1){
        const index = startIndex
        startIndex++

        if(char.has(value[index])){
            if(char.get(value[index]) == 0){
                matched--
            }
            char.set(value[index],char.get(value[index])+1)
        }

    }
}
  return arr;
}

const res = permutationString("baa", "aa");
console.log(res);
