// Create Hello World Function

// Example 1:
// Input: args = []
// Output: "Hello World"

// Example 2:
// Input: args = [{},null,42]
// Output: "Hello World"

var createHelloWorld = function() {
  return function(...args) {
      return "Hello World";
  }
};