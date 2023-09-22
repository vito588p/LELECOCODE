//Array Reduce Transformation
var reduce = function(nums, fn, init) {
  let count = init;
    
  for (let i = 0; i < nums.length; i++) {
      count = fn(count, nums[i]);
  }
  
  return count;
};