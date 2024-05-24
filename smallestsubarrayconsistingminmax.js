/*
Smallest subarray containing minimum and maximum values

{1,2,9,3,1,9}
0 to 5 als min and max sub array
0 to 1 also min and max sub array
4 to 5 also min and max sub array
The smallest length subarray is 4 to 5


- findMin of the array
- findMax of the array
- Iterate over array and check if element matches min or max
- In the same loop calculate the length as well

O(N)
*/

// const arr = [1, 5, 9, 7, 1, 9, 4]
const arr = [2, 2, 2, 2]

let min = Number.MAX_VALUE
let max = Number.MIN_VALUE

for(const v of arr){
    if(v<min) min = v;
    if(v>max) max = v;
}

let minPosition = -1
let maxPosition = -1
let minLength = Number.MAX_VALUE;
for(let i = 0; i< arr.length; i++){
    const v = arr[i]
    if(v === min){
        minPosition = i;
    }
    if(v == max){
        maxPosition = i;
    }
    if(minPosition!==-1 && maxPosition!==-1){
        minLength = Math.min(minLength, Math.abs(minPosition - maxPosition) + 1);
    }
}

console.log(minLength)