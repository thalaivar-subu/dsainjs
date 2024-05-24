// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/674/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

/*
 hashmap - decrement once added
*/
var intersect = function(a1, a2) {
    let results = []
    const freqMap = new Map();
    for(let i=0;i<a1.length;i++){
        freqMap.set(a1[i], (freqMap.get(a1[i]) || 0) + 1)
    }
    for(let i=0;i<a2.length;i++){
        if(freqMap.has(a2[i]) && freqMap.get(a2[i]) > 0){
            results.push(a2[i])
            freqMap.set(a2[i],  freqMap.get(a2[i]) - 1)
        }
    }
    return results;
};