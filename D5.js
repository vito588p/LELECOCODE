// Array Reduce Transformation

// Example 1:
// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]

// Example 2:
// Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
// Output: [1,3,5]

// Example 3:
// Input: arr = [10,20,30], fn = function constant() { return 42; }
// Output: [42,42,42]

var reduce = function(nums, fn, init) {
  let count = init;
    
  for (let i = 0; i < nums.length; i++) {
      count = fn(count, nums[i]);
  }
  
  return count;
};