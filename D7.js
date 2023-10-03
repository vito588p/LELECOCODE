// Array Reduce Transformation

// Example 1:
// Input:
// nums = [1,2,3,4]
// fn = function sum(accum, curr) { return accum + curr; }
// init = 0
// Output: 10

// Example 2:
// Input:
// nums = [1,2,3,4]
// fn = function sum(accum, curr) { return accum + curr * curr; }
// init = 100
// Output: 130

// Example 3:
// Input:
// nums = []
// fn = function sum(accum, curr) { return 0; }
// init = 25
// Output: 25

var reduce = function(nums, fn, init) {
  let count = init;
    
  for (let i = 0; i < nums.length; i++) {
    count = fn(count, nums[i]);
  }
    
  return count;
};