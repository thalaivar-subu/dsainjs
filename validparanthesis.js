/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const map = { "(": ")", "{": "}", "[": "]" };
  if (s.length < 2) return false;
  else {
    for (let i = 0; i < s.length; i++) {
      let x = s.charAt(i);
      if (map[x]) stack.push(map[x]);
      else if (stack.pop() !== x) return false;
    }
    return stack.length === 0;
  }
};
