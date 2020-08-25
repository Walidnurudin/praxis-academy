function Alpha() { }

Alpha.prototype.isAlpha = function (letter) {
    return /^[a-zA-Z]$/.test(letter);
};

function Vowel() { }
//________________________________________  //Write in blank to inherit from Alpha
Vowel.prototype = new Alpha();
Vowel.constructor = Vowel;

Vowel.prototype.isVowel = function (letter) {
    return /^[aeiuoyAEIOUY]$/.test(letter);
};


function Consonant() { }
//________________________________________  //Write in blank to inherit from Alpha
Consonant.prototype = new Alpha();
Consonant.constructor = Consonant;

Consonant.prototype.isConsonant = function (letter) {
    return /^[^aeiouyAEIOUY]$/.test(letter);
}


// STATIC
let A = new Alpha();
console.log(A.isAlpha("A")); // true

let e = new Vowel();
console.log(e.isVowel("e")); // true

let r = new Consonant();
console.log(r.isConsonant("r")); // true


// DINAMIC INPUT
function processData(input) {
    var a = new Alpha();
    console.log(`'${input[0]}' is ${a.isAlpha(input[0]) ? `` : `not `}a letter.`);

    var b = new Vowel();
    console.log(`'${input[1]}' is ${b.isAlpha(input[1]) ? `a letter ${b.isVowel(input[1]) ? `and` : `but not`} a vowel.` : "not a letter."} `);

    var c = new Consonant();
    console.log(`'${input[2]}' is ${c.isAlpha(input[2]) ? `a letter ${c.isConsonant(input[2]) ? `and` : `but not`} a consonant.` : "not a letter."} `);

};