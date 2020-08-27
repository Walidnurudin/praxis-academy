const notCurry = (x, y, z) => x + y + z; // a regular function
console.log(notCurry(1, 2, 3)); // 6

const curry = x => y => z => x + y + z; // a curry function
console.log(curry(1)(2)(3)); // 6