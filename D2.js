// Counter

// Example 1:
// Input:
// n = 10
// ["call","call","call"]
// Output: [10,11,12]

// Example 2:
// Input:
// n = -2
// ["call","call","call","call","call"]
// Output: [-2,-1,0,1,2]

var createCounter = function(n) {
    
  return function() {
      return n++;
  };
};