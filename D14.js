// Timeout Cancellation

// Example 1:
// Input: fn = (x) => x * 5, args = [2], t = 20, cancelT = 50
// Output: [{"time": 20, "returned": 10}]

// Example 2:
// Input: fn = (x) => x*/*2, args = [2], t = 100, cancelT = 50
// Output: []

// Example 3:
// Input: fn = (x1, x2) => x1 * x2, args = [2,4], t = 30, cancelT = 100
// Output: [{"time": 30, "returned": 8}]

var cancellable = function(fn, args, t) {
  const cancelFn = function () {
      clearTimeout(timer);
  };
  const timer = setTimeout(() => {
      fn(...args)
  }, t);
  return cancelFn;
};