// Immutability(kekekalan)
// Dalam pemrograman fungsional data tidak pernah berubah. Data tidak dapat diubah. Variabel tidak pernah bisa diubah. Untuk memperbarui nilainya, Anda membuat variabel baru.

// Object.assign()
const redObj = { color: 'red' }
const Obj = Object.assign({}, redObj, {name: 'color'});

console.log(redObj);
console.log(Obj);


// concat()
let a = [1, 2];
let b = [1, 2].concat(3);

console.log(a); // [1, 2]
console.log(b); // [1, 2, 3]

// or use Spread operator
let c = [...a, 3];

console.log(c); // [1, 2, 3]
