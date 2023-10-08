// Group By

// Example 1:
// Input:
// array = [
// {"id":"1"},
// {"id":"1"},
// {"id":"2"}
// ],
// fn = function (item) {
// return item.id;
// }
// Output:
// {
// "1": [{"id": "1"}, {"id": "1"}],
// "2": [{"id": "2"}]
// }

// Example 2:
// Input:
// array = [
// [1, 2, 3],
// [1, 3, 5],
// [1, 5, 9]
// ]
// fn = function (list) {
// return String(list[0]);
// }
// Output:
// {
// "1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]]
// }

// Example 3:
// Input:
// array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// fn = function (n) {
// return String(n > 5);
// }
// Output:
// {
// "true": [6, 7, 8, 9, 10],
// "false": [1, 2, 3, 4, 5]
// }

Array.prototype.groupBy = function(fn) {
    const group = {}

    this.forEach(item => {
        const key = fn(item);

        if (group[key] === undefined) {
            (group[key] = [item]);
        } else {
            group[key].push(item);
        };
    });
    return group;
};