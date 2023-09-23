// Function Composition

// **Example 1:**
// Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
// Output: 65

// **Example 2:**
// Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
// Output: 1000

// **Example 3:**
// Input: functions = [], x = 42
// Output: 42

var compose = function(functions) {
	return function(x) {
    return function(x) {
      return functions.reduceRight((result, fn) => fn(result), x)
    };
  };
};
