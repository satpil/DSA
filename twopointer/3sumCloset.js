function threesumCloset(num,target){
let closetSum = Infinity;
let sumDiff = Infinity;
num.sort((a,b) => a-b);

for(let i=0;i < num.length - 2;i++){
    let left = i + 1;
    let right = num.length - 1;


    while(left < right){
    const totalSum = num[i]+num[left]+num[right];
     
        if(Math.abs(target - totalSum) < Math.abs(target - closetSum)){     
           closetSum = totalSum;                                             
        }
        if(target === totalSum){
            return totalSum;
        }
        else if(totalSum > target){
            right--
        }else{
            left++
        }
    }
}
return closetSum
}
const res = threesumCloset([1, 0, 1, 1],100);
console.log(res)