// Counter II

// Example 1:
// Input: init = 5, calls = ["increment","reset","decrement"]
// Output: [6,5,4]

// Example 2:
// Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
// Output: [1,2,1,0,0]

var createCounter = function(init) {
  let currentValue = init;
  
  return {
    increment: () => {
      currentValue++;
      return currentValue;
    },
    decrement: () => {
      currentValue--;
      return currentValue;
    },
    reset: () => {
      currentValue = init;
      return currentValue;
    }
  };
}