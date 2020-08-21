// Ada dua cara untuk bikin regex di JavaScript. Kita bisa bikin objek RegExp atau pake string biasa.
var re1 = new RegExp(/\d/g);
var re2 = /\d/g;

var s = 'abc123def vwxyz456';

console.log(s.match(re1));
console.log(s.match(re2));


// MODIFIER
// 1
var s = "Ibu beli 5 tahu. Ayah beli 100 kerupuk.";

//ga pake g
var re1 = /\d/;
console.log(s.match(re1)); // ["5"]

//pake g
var re2 = /\d/g;
console.log(s.match(re2)); // ["5", "1", "0", "0"]

// 2
var s = "ba bi bu\nba bi bu\nba bi bu";

//ga pake m
var re1 = /^ba/g;
console.log(s.match(re1)); // ["ba"]

//pake m
var re2 = /^ba/gm;
console.log(s.match(re2)); // ["ba", "ba", "ba"]


// CHARACTER CLASS
// 1
var s = "Ini ibu Budi \n bukan bapaknya.";
var re = /./g;
console.log(s.match(re)); // ["I", "n", "i", " ", "i", "b", "u", " ", "B", "u", "d", "i", " ", " ", "b", "u", "k", "a", "n", " ", "b", "a", "p", "a", "k", "n", "y", "a", "."]

// 2
var s = "sempurna..";
var re = /\./g;
console.log(s.match(re)); // [".", "."]

//kalo ga pake \ di depan .
var re2 = /./g;
console.log(s.match(re2)); // ["s", "e", "m", "p", "u", "r", "n", "a", ".", "."]

// 3
var s = 'abCD123 efg456 !@#$%^_';

//angka
console.log(s.match(/\d/g)); // ["1", "2", "3", "4", "5", "6"]

//selain angka
console.log(s.match(/\D/g)); // ["a", "b", "C", "D", " ", "e", "f", "g", " ", "!", "@", "#", "$", "%", "^", "_"]

//angka, huruf, underscore
console.log(s.match(/\w/g)); // ["a", "b", "C", "D", "1", "2", "3", "e", "f", "g", "4", "5", "6", "_"] 

//selain angka, huruf, & underscore
console.log(s.match(/\W/g)); // [" ", " ", "!", "@", "#", "$", "%", "^"]

//whitespace
console.log(s.match(/\s/g)); // [" ", " "]


// CHARACTER SET
var s = "abcde 1234 fghij 5678 vwxyz";

//cari angka 3,4,5,6
console.log(s.match(/[3456]/g)); // ["3", "4", "5", "6"]

//cari angka 1 sampai 7
console.log(s.match(/[1-7]/g)); // ["1", "2", "3", "4", "5", "6", "7"]

//cari semua karakter dalam kurung siku
console.log(s.match(/[aij12z]/g)); // ["a", "1", "2", "i", "j", "z"]

//cari semua karakter yang bukan angka 
console.log(s.match(/[^0-9]/g)); // ["a", "b", "c", "d", "e", " ", " ", "f", "g", "h", "i", "j", " ", " ", "v", "w", "x", "y", "z"]


// ALTERNATION
var s1 = "Kuku kaki kakekku kaku-kaku ye";

//cari kuku atau kaku
console.log(s1.match(/kuku|kaku/gi)) // ["Kuku", "kaku", "kaku"]

// BEUNDARY / ANCHOR
var s = "Ini ibu Rudy\nIni bapak Rudy";

//semua i di awal baris
console.log(s.match(/^i/igm)); // ["y", "y"]

//semua y di akhir baris
console.log(s.match(/y$/igm)); // ["y", "y"]

//semua i di akhir kata
console.log(s.match(/i\b/igm)); // ["i", "i"]

//semua i di awal kata
console.log(s.match(/\bi/igm)); // ["I", "i", "I"]


// GROUP
// 1
var files = "hello.jpg\n"+
            "hello.png\n"+
            "dog.png\n"+
            "pic1.png\n"+
            "pic2.png\n"+
            "pic3a.gif\n"+
            "pic4.jpg\n"+
            "helloboy.gif";

//file bernama hello atau dog
console.log(files.match(/(dog|hello).*/gm)); // ["hello.jpg", "hello.png", "dog.png", "helloboy.gif"]

//file bernama hello tapi bukan helloboy
console.log(files.match(/hello(?!boy).*/gm)); // ["hello.jpg", "hello.png"]

//file dengan ekstensi gif atau jpg 
console.log(files.match(/.*(gif|jpg)/gm)); // ["hello.jpg", "pic3a.gif", "pic4.jpg", "helloboy.gif"]

//file dengan nama berawalan pic, ekstensi gif atau jpg
console.log(files.match(/pic.*(gif|jpg)/gm)); // ["pic3a.gif", "pic4.jpg"]

// 2
var s = "dua tambah tiga sama dengan lima";

var re1 = /(dua).*(lima)/;

//simpan hasil regex sbg variabel
var res = re1.exec(s);

//group 1 : dua
console.log(res[1]); // "dua"
//group 2: lima
console.log(res[2]); // "lima"

//ganti teks group 1 
s = s.replace(res[1],'tiga');
//ganti teks group 2 
s = s.replace(res[2],'enam');

console.log(s); // "tiga tambah tiga sama dengan enam"


// NEGATIVE LOOKAHEAD
var s0 = "ship01.png ship02.png ship03.png ship04.png";

//cari text yg bukan ship02.png & ship03.png
var re1 = /ship(?!02|03)\d*.png/g;

console.log(s0.match(re1)); // ["ship01.png", "ship04.png"]
