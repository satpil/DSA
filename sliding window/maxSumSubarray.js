// Problem Statement
// Given an array of positive numbers and a positive number ‘k’, find the maximum sum of any contiguous subarray of size ‘k’.

// Input: [2, 1, 5, 1, 3, 2], k=3 
// Output: 9

function max_Subarray (nums,k){

    // declare a maxsum variable to store the maximum sum this will specidif to this question
    let maxSum  = 0;

    // in sliding pattern we need the windowsum and start index this is common in all sliding window pattern

    let windowSum = 0;
    let startIndex = 0;


    if(nums.length < k){
        return false
    }

    //for loop is common pattern in sliding
    for(let i=0;i < nums.length;i++){
        windowSum += nums[i];
        if(i >= k-1){
          maxSum = Math.max(maxSum,windowSum);
          windowSum -= nums[startIndex];
          startIndex++
        }
    }
    return maxSum;
    }
    
    const res = max_Subarray([2, 1, 5, 1, 3, 2],3);
    console.log(res);
    