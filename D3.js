// To Be Or Not To Be

// Example 1:
// Input: func = () => expect(5).toBe(5)
// Output: {"value": true}
// Explanation: 5 === 5 so this expression returns true.

// Example 2:
// Input: func = () => expect(5).toBe(null)
// Output: {"error": "Not Equal"}
// Explanation: 5 !== null so this expression throw the error "Not Equal".

// Example 3:
// Input: func = () => expect(5).notToBe(null)
// Output: {"value": true}
// Explanation: 5 !== null so this expression returns true.

var expect = function(val) {
  return {
      toBe: (val2) => { 
          if (val === val2) {
              return true;
          } else {
              throw new Error("Not Equal");
          }
      },
      notToBe: (val2) => {
          if (val !== val2) {
              return true;
          } else {
              throw new Error("Equal");
          }
      }
  };
};