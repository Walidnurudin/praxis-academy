// Object.assign() menyalin semua properti enumerable sendiri dari satu atau lebih objek sumber ke objek target. Ini mengembalikan objek target.

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }



// Object.create() membuat objek baru, menggunakan objek yang sudah ada sebagai prototipe objek yang baru dibuat.

const person = {
    isHuman: false,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
};

const me = Object.create(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();
// expected output: "My name is Matthew. Am I human? true"


//   Object.entries () mengembalikan larik dari properti string-keyed milik objek tertentu yang berpasangan [key, value], dalam urutan yang sama seperti yang disediakan oleh for ... in loop.

const object1 = {
    a: 'somestring',
    b: 42
};

for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
}

  // expected output:
  // "a: somestring"
  // "b: 42"
  // order is not guaranteed
