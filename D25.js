// Join Two Arrays by ID

// Example 1:
// Input: 
// arr1 = [
//     {"id": 1, "x": 1},
//     {"id": 2, "x": 9}
// ], 
// arr2 = [
//     {"id": 3, "x": 5}
// ]
// Output: 
// [
//     {"id": 1, "x": 1},
//     {"id": 2, "x": 9},
//     {"id": 3, "x": 5}
// ]

// Example 2:
// Input: 
// arr1 = [
//     {"id": 1, "x": 2, "y": 3},
//     {"id": 2, "x": 3, "y": 6}
// ], 
// arr2 = [
//     {"id": 2, "x": 10, "y": 20},
//     {"id": 3, "x": 0, "y": 0}
// ]
// Output: 
// [
//     {"id": 1, "x": 2, "y": 3},
//     {"id": 2, "x": 10, "y": 20},
//     {"id": 3, "x": 0, "y": 0}
// ]

// Example 3:
// Input: 
// arr1 = [
//     {"id": 1, "b": {"b": 94},"v": [4, 3], "y": 48}
// ]
// arr2 = [
//     {"id": 1, "b": {"c": 84}, "v": [1, 3]}
// ]
// Output: [
//     {"id": 1, "b": {"c": 84}, "v": [1, 3], "y": 48}
// ]

var join = function(arr1, arr2) {
  const combined = arr1.concat(arr2);
  const merged = {};

  combined.forEach((obj) => {
      const id = obj.id;
      if (merged[id]) {
          merged[id] = {...merged[id], ...obj};
      } else {
          merged[id] = {...obj};
      };
  });

  const joinArray = Object.values(merged);
  return joinArray;
};