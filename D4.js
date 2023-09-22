//Day 4

var createCounter = function(init) {
  let currentValue = init;
  
  return {
    increment: () => {
      currentValue++;
      return currentValue;
    },
    decrement: () => {
      currentValue--;
      return currentValue;
    },
    reset: () => {
      currentValue = init;
      return currentValue;
    }
  };
}