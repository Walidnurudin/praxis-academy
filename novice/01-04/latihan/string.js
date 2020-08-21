// String literals
'foo';
"bar";

// Hexadecimal escape sequences
var a = '\xA9'; // "©"
var b = '\u00A9' // "©"

// String objects
// 1
const foo = new String('foo'); // Creates a String object
console.log(foo); // Displays: [String: 'foo']
typeof foo; // Returns 'object'

// 2.
const firstString = '2 + 2'; // Creates a string literal value
const secondString = new String('2 + 2'); // Creates a String object
eval(firstString); // Returns the number 4
eval(secondString); // Returns the string "2 + 2"

// Multi-line template literals
// 1
console.log('string text line 1\n\
string text line 2');
// "string text line 1
// string text line 2"

// 2
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"

// Embedded expressions
// 1
const five = 5;
const ten = 10;
console.log('Fifteen is ' + (five + ten) + ' and not ' + (2 * five + ten) + '.');
// "Fifteen is 15 and not 20."

// 2
const five = 5;
const ten = 10;
console.log(`Fifteen is ${five + ten} and not ${2 * five + ten}.`);
// "Fifteen is 15 and not 20."