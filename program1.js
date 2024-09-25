/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
      const stack = [];
    const matchingBrackets = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let char of s) {
        if (['(', '[', '{'].includes(char)) {
            stack.push(char);
        } else if ([')', ']', '}'].includes(char)) {
            if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
    
};

module.exports = { isValid };


