Given the root of a binary tree, find if it is a valid binary search tree
       1
     /    \
   3       6
 /  \     /
2  4    5


Input string s, and pattern p. Pattern p has 2 special characters
‘.’ Matches any single character.
'*' Matches any sequence of characters (including the empty sequence).

Find if the patter p matches string s

Ex: 
1. input s = "aa", p = "a" output: false
 2. input s = "aa", p = “a.” output: true
 3. input s = “cab”, p = “*b” output: true
 4. input s = “cab”, p = “*a” output: false
5. input s = “cabbbdc”, p = “*bd*c” output: true
 // iterate each character
 // star skip until next character is found, if found check for next character, doesnt match, return back
 Check and Return Back - Recursion
 
 let i, j = 0;
 const isMatching = (s, p) => {
    		let sChar = s.charAt(i)
        let pChar = p.charAt(j)
        if(pChar === "*"){
        	const matchIndex = isMatching(s, p, i + 1, j)
          if(matchIndex > 0){
          	return j+=1;
          }
        } else if (pChar === ".") {
        } else if(pChar === sChar){
        		j+=1;
        }
 }
 
 Given a rotated sorted array and an integer target, return the index of target if it is in the array, -1 otherwise.

Input: arr = [4,5,6,7,0,1,2], target = 0
Output: 4

Input: arr = [4,5,6,7,0,1,2], target = 3
Output: -1

const binarySearch = (nums, target) => {
	let left = 0;
  let right = nums.length - 1;
  while(left <= right){
  	let mid = Math.floor((left + right)/2)
    if(nums[mid] < target){
    	left = mid + 1
    	if((mid + 1) > nums.length - 1){
      	mid = 0
      }
    } 
    else if(nums[mid] > target) {
    	if((mid - 1) < 0){
      	mid = nums.length - 1
      }
    }
    else return mid;
  }
  return -1;
}











 
 