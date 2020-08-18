# Values, Types, and Operators

## Values
Suatu nilai (value) adalah hal apapun yang mungkin dapat dievaluasi, disimpan dalam suatu struktur data, dikirimkan sebagai suatu argumentasi atau dikembalikan lagi sebagai hasil.

Suatu perhitungan adalah suatu urutan operasi yang diberlakukan untuk suatu nilai untuk menghasilkan suatu nilai. Dengan demikian nilai-nilai dan operasi adalah dasar perhitungan.

## Numbers
Value dari jenis Number. Dalam program JavaScript, mereka ditulis sebagai berikut:

<code>13</code>

Bilangan pecahan ditulis dengan menggunakan titik.

<code>9.81</code>

## Arithmetic
Hal utama yang harus dilakukan dengan angka adalah aritmatika. Operasi aritmatika seperti penjumlahan atau perkalian mengambil dua nilai bilangan dan menghasilkan bilangan baru darinya.

<code>100 + 4 * 11</code>

Simbol + dan * disebut operator. Yang pertama berarti penjumlahan, dan yang kedua berarti perkalian. Menempatkan operator di antara dua nilai akan menerapkannya ke nilai tersebut dan menghasilkan nilai baru.

Tetapi apakah contoh tersebut berarti “tambahkan 4 dan 100, dan kalikan hasilnya dengan 11,” atau apakah perkaliannya dilakukan sebelum penjumlahan? Seperti yang sudah Anda duga, perkalian terjadi lebih dulu. Tetapi seperti dalam matematika, Anda dapat mengubahnya dengan membungkus penjumlahan dalam tanda kurung.

<code>(100 + 4) * 11</code>

Untuk pengurangan, ada operator -, dan pembagian bisa dilakukan dengan operator /.

Saat operator muncul bersama tanpa tanda kurung, urutan penerapannya ditentukan oleh prioritas operator. Contoh tersebut menunjukkan bahwa perkalian terjadi sebelum penjumlahan. Operator / memiliki prioritas yang sama dengan *. Begitu juga untuk + dan -.

## Special numbers
Ada tiga nilai khusus dalam JavaScript yang dianggap angka tetapi tidak berperilaku seperti angka biasa.

Dua yang pertama adalah Infinity dan -Infinity, yang mewakili infinitas positif dan negatif. Infinity - 1 masih Infinity, dan seterusnya. Namun, jangan terlalu percaya pada komputasi berbasis infinity. Ini tidak terdengar secara matematis, dan itu akan segera mengarah ke nomor khusus berikutnya: NaN.

NaN adalah singkatan dari "not a number", meskipun itu adalah nilai dari jenis angka. Anda akan mendapatkan hasil ini saat Anda, misalnya, mencoba menghitung 0/0 (nol dibagi nol), Infinity - Infinity, atau sejumlah operasi numerik lain yang tidak memberikan hasil yang berarti.

## Strings
String digunakan untuk merepresentasikan teks. Mereka ditulis dengan melampirkan isinya dalam tanda kutip.

<code>
`Down on the sea`
"Lie on the ocean"
'Float on the ocean'
</code>

Anda dapat menggunakan tanda kutip tunggal, tanda kutip ganda, atau tanda kutip belakang untuk menandai string, selama tanda kutip di awal dan akhir string cocok.

## Unary operators
Tidak semua operator adalah simbol. Beberapa ditulis sebagai kata-kata. Salah satu contohnya adalah operator typeof, yang menghasilkan nilai string yang menamai tipe nilai yang Anda berikan.

<code>
console.log(typeof 4.5)
// → number
console.log(typeof "x")
// → string
</code>

## Boolean values
Seringkali berguna untuk memiliki nilai yang membedakan hanya antara dua kemungkinan, seperti "ya" dan "tidak" atau "aktif" dan "tidak aktif". Untuk tujuan ini, JavaScript memiliki tipe Boolean, yang hanya memiliki dua nilai, benar dan salah, yang ditulis sebagai kata-kata tersebut.

## Comparison
Berikut salah satu cara untuk menghasilkan nilai Boolean:

<code>
console.log(3 > 2)
// → true
console.log(3 < 2)
// → false
</code>

Tanda > dan < adalah simbol tradisional untuk masing-masing "lebih besar dari" dan "lebih kecil dari". Mereka adalah operator biner. Menerapkannya menghasilkan nilai Boolean yang menunjukkan apakah benar dalam kasus ini.

## Logical operators
Ada juga beberapa operasi yang dapat diterapkan ke nilai Boolean itu sendiri. JavaScript mendukung tiga operator logika: and, or, dan not. Ini dapat digunakan untuk "bernalar" tentang Boolean.

Operator && merepresentasikan logika 'and'. Ini adalah operator biner, dan hasilnya benar hanya jika kedua nilai yang diberikan padanya benar.

<code>
console.log(true && false)
// → false
console.log(true && true)
// → true
</code>

operator || menunjukkan logika 'or'. Ini menghasilkan true jika salah satu nilai yang diberikan padanya benar.

<code>
console.log(false || true)
// → true
console.log(false || false)
// → false
</code>

## Empty values
Ada dua nilai khusus, tertulis null dan undefined, yang digunakan untuk menunjukkan tidak adanya nilai yang berarti. Mereka sendiri adalah nilai-nilai, tetapi mereka tidak membawa informasi.

## Automatic type conversion
JavaScript berusaha keras untuk menerima hampir semua program yang Anda berikan, bahkan program yang melakukan hal-hal aneh. Ini ditunjukkan dengan baik oleh ekspresi berikut:

<code>
console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" + 1)
// → 51
console.log("five" * 2)
// → NaN
console.log(false == 0)
// → true
</code>

## Short-circuiting of logical operators
The logical operators && and || handle values of different types in a peculiar way. They will convert the value on their left side to Boolean type in order to decide what to do, but depending on the operator and the result of that conversion, they will return either the original left-hand value or the right-hand value.

The || operator, for example, will return the value to its left when that can be converted to true and will return the value on its right otherwise. This has the expected effect when the values are Boolean and does something analogous for values of other types.

<code>
console.log(null || "user")
// → user
console.log("Agnes" || "user")
// → Agnes
</code>

## Summary
Kami melihat empat jenis nilai JavaScript di bab ini: angka, string, Boolean, dan nilai tak terdefinisi.

Nilai tersebut dibuat dengan mengetikkan namanya (true, null) atau value (13, "abc"). Anda dapat menggabungkan dan mengubah nilai dengan operator. Kami melihat operator biner untuk aritmatika (+, -, *, /, dan%), penggabungan string (+), perbandingan (==,! =, ===,! ==, <,>, <=,> = ), dan logika (&&, ||), serta beberapa operator unary (- untuk meniadakan angka,! untuk meniadakan secara logis, dan typeof untuk menemukan tipe nilai) dan operator terner (? :) untuk memilih salah satu dari dua nilai berdasarkan nilai ketiga.