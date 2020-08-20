// Nested function(function bersarang)

// 1
function sayHiBye(firstName, lastName) {

    // function bersarang
    function getFullName() {
        return firstName + " " + lastName;
    }
    console.log("Hello, " + getFullName());
    console.log("Bye, " + getFullName());
}

sayHiBye("walid", "nurudin")

// 2
function makeCounter() {
    let count = 0;

    return function () {
        return count++;
    };
}

let counter = makeCounter();

alert(counter()); // 0
alert(counter()); // 1
alert(counter()); // 2


// Closure

// 1
var counter = 0;

function addCounter() {
    counter++;
}

addCounter();
addCounter();
addCounter();

console.log(counter) // 3

// 2
function makeName() {
    var name = "walid";
    function displayName() {
        console.log(name)
    }
    return displayName;
}

var myFunc = makeName();
myFunc();