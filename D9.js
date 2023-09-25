// Day 9: Return Length of Arguments Passed
// Write a function argumentsLength that returns the count of arguments passed to it.

// Example 1:
// Input: argsArr = [5]
// Output: 1

// Example 2:
// Input: argsArr = [{}, null, "3"]
// Output: 3

var argumentsLength = function(...args) {
  return args.length;
};
