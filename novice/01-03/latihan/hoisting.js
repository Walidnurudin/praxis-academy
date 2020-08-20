// VARIABEL
// var
if (true) {
    var x = 5;
}
console.log(x);  // x is 5

// let
if (true) {
    let y = 5;
}
console.log(y);  // ReferenceError: y is not defined

// const
const a = 1;

a = 3; // error karena const tidak bisa dirubah nilainya


// FUNCTION
// fanction declaration
foo(); // "bar"

function foo() {
  console.log('bar');
}

// function expression
baz(); // TypeError: baz is not a function

var baz = function() {
  console.log('bar2');
};