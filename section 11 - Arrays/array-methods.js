let arr = ['a', 'b', 'c', 'd', 'e'];

// slice
console.log(arr.slice(2));
console.log(arr.slice(2, 4));

console.log(arr.slice(-2));
console.log(arr.slice(-3));
console.log(arr.slice(-1));

console.log('Second argument is negative ', arr.slice(1, -1));
console.log('Second argument is negative ', arr.slice(1, -2));

console.log(arr.slice());
console.log(...arr);

let [first, second, ...others] = [...arr];
console.log([first]);
console.log([second]);
console.log([...others]);

// splice
let languages = ['Python', 'Java', 'Ruby', 'C#'];

// Remove 1 element from index -1
console.log('Element removed: ', languages.splice(-1));
console.log('Array: ', languages);

// Initial index: 1
// Quantity elements to remove: 1
console.log('Element removed: ', languages.splice(1, 1));
console.log('Array: ', languages);

// Initial index: 0
// Quantity elements to remove: 1
// Element to insert (in the index 0): "JavaScript"
console.log('Element removed: ', languages.splice(0, 1, 'JavaScript'));
console.log('Array: ', languages);
