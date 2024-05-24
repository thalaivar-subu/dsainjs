/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = [];
    // backtracking required - So dfs
    const dfs = (index, currentVal, arr) =>{
        // base case
        if(currentVal < 0) return

        // valid case
        if(currentVal === 0){
            result.push([...arr])
        }

        // recursion
        for(let i = index; i<candidates.length;i++){
            const candidate = candidates[i];
            arr.push(candidate)
            dfs(i, currentVal - candidate, arr)
            arr.pop()
        }
    }
    dfs(0, target, [])
    return result;
};