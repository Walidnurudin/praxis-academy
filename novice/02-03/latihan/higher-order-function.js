// Imperative Pattern vs Declarative Pattern

// Pola Imperatif berfokus pada penggambaran bagaimana suatu program beroperasi, yang terdiri dari perintah-perintah yang harus dilakukan oleh komputer.
// Pola Deklaratif berfokus pada apa yang harus dicapai program tanpa menentukan bagaimana program harus mencapai hasil.
// Pemrograman fungsional mengikuti pola deklaratif.


// Examples of Functional Programming
// Array Functions
let meetup = [
    { name: "React", isActive: true },
    { name: "Node", isActive: true },
    { name: "Vue", isActive: false }
];

// imperative
let activeMeetup = [];
for (let i = 0; i < meetup.length; i++) {
    let m = meetup[i];
    if (m.isActive) {
        activeMeetup.push(m);
    }
}

console.log(activeMeetup);

// declarative
let activeMeetupFP = meetup.filter(m => {
    return m.isActive
})

console.log(activeMeetupFP);



// method chaining
angka = [5, 9, 10, -7, -1, 15, 2, 9, -10, 0];

const hasil = angka.filter(a => a > 5)
.map(a => a * 3)
.reduce((acc, cur) => acc + cur);

console.log(hasil); //129