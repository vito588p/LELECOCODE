// Promise Time Limit

// Example 1:
// Input:
// fn = async (n) => {
// await new Promise(res => setTimeout(res, 100));
// return n * n;
// }
// inputs = [5]
// t = 50
// Output: {"rejected":"Time Limit Exceeded","time":50}

// Example 2:
// Input:
// fn = async (n) => {
// await new Promise(res => setTimeout(res, 100));
// return n * n;
// }
// inputs = [5]
// t = 150
// Output: {"resolved":25,"time":100}

// Example 3:
// Input:
// fn = async (a, b) => {
// await new Promise(res => setTimeout(res, 120));
// return a + b;
// }
// inputs = [5,10]
// t = 150
// Output: {"resolved":15,"time":120}

// Example 4:
// Input:
// fn = async () => {
// throw "Error";
// }
// inputs = []
// t = 1000
// Output: {"rejected":"Error","time":0}

var timeLimit = function(fn, t) {
	return async function(...args) {
        return new Promise((resolve, reject) => {
            const timeoutId = setTimeout(() => {
                clearTimeout(timeoutId);
                reject("Time Limit Exceeded");
            }, t);

            fn(...args)
                .then((result) => {
                    clearTimeout(timeoutId);
                    resolve(result);
                })
                .catch((error) => {
                    clearTimeout(timeoutId);
                    reject(error);
                });
        });
    };
};

// Runtime  54ms
// Beats 71.07%of users with JavaScript

// Memory  42.19MB
// Beats 22.04%of users with JavaScript