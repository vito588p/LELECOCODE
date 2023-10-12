// Compact Object

// Example 1:
// Input: obj = [null, 0, false, 1]
// Output: [1]

// Example 2:
// Input: obj = {"a": null, "b": [false, 1]}
// Output: {"b": [1]}

// Example 3:
// Input: obj = [null, 0, 5, [0], [false, 16]]
// Output: [5, [], [16]]

var compactObject = function(obj) {
  const result = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
      let val = obj[key];
      if (val) {
          if (typeof val === 'object') {
              val = compactObject(val);
          }
          Array.isArray(obj) ? result.push(val) : result[key] = val;
      }
  }
  return result;
};


//Runtime  96ms
//Beats 27.49%of users with JavaScript

//Memory  58.03MB
//Beats 12.53%of users with JavaScript