// Interval Cancellation

// Example 1:
// Input: fn = (x) => x * 2, args = [4], t = 35, cancelT = 190
// Output:
// [
// {"time": 0, "returned": 8},
// {"time": 35, "returned": 8},
// {"time": 70, "returned": 8},
// {"time": 105, "returned": 8},
// {"time": 140, "returned": 8},
// {"time": 175, "returned": 8}
// ]

// Example 2:
// Input: fn = (x1, x2) => (x1 * x2), args = [2, 5], t = 30, cancelT = 165
// Output:
// [
// {"time": 0, "returned": 10},
// {"time": 30, "returned": 10},
// {"time": 60, "returned": 10},
// {"time": 90, "returned": 10},
// {"time": 120, "returned": 10},
// {"time": 150, "returned": 10}
// ]

// Example 3:
// Input: fn = (x1, x2, x3) => (x1 + x2 + x3), args = [5, 1, 3], t = 50, cancelT = 180
// Output:
// [
// {"time": 0, "returned": 9},
// {"time": 50, "returned": 9},
// {"time": 100, "returned": 9},
// {"time": 150, "returned": 9}
// ]

var cancellable = function(fn, args, t) {
  fn(...args);
  let time = setInterval(() => fn(...args),t);

  let result = () => clearInterval(time)
  return result;
};