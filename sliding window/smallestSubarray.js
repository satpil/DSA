// Given an array of positive numbers and a positive number ‘S’, find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0, if no such subarray exists.

// Input: [2, 1, 5, 2, 3, 2], S=7 
// Output: 2


function smallSubArray (nums,k){
    let windowSum = 0;
    let minLen  = Infinity;
    let startIndex = 0;

    for(let i=0;i < nums.length;i++){
        windowSum += nums[i];
        while(windowSum >= k){
          minLen = Math.min(minLen,i-startIndex+1);
          windowSum -= nums[startIndex];
          startIndex++
        }
    }
    if(minLen === Infinity){
        return 0
    }
    return minLen;
    }
    
    const res = smallSubArray([2, 1, 5, 2, 3, 2],7);
    console.log(res);
    