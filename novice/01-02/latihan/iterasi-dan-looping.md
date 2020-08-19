# Loops and iteration

## for statement
Perulangan for akan berulang hingga kondisi tertentu bernilai false.

`for ([initialExpression]; [conditionExpression]; [incrementExpression])`

`  statement`

Saat perulangan for dijalankan, hal berikut ini terjadi:

- Ekspresi inisialisasi initialExpression, jika ada, dijalankan. Ekspresi ini biasanya menginisialisasi satu atau lebih penghitung pengulangan, tetapi sintaksis memungkinkan ekspresi dengan tingkat kerumitan apa pun. Ekspresi ini juga dapat mendeklarasikan variabel.
- Ekspresi conditionExpression dievaluasi. Jika nilai conditionExpression benar, pernyataan loop akan dieksekusi. Jika nilai kondisi salah, perulangan for berhenti. (Jika ekspresi kondisi dihilangkan seluruhnya, kondisi dianggap benar.)
- Pernyataan itu dijalankan. Untuk menjalankan beberapa pernyataan, gunakan pernyataan blok ({...}) untuk mengelompokkan pernyataan tersebut.
- Jika ada, ekspresi pembaruan incrementExpression dijalankan.
- Kontrol kembali ke Langkah 2.

Contoh :
`for (let line = "#"; line.length < 8; line += "#")`

`  console.log(line);`

## do...while statement
Pernyataan do ... while diulang sampai kondisi tertentu bernilai false.

Pernyataan do ... while terlihat sebagai berikut:

`do`

`  statement`

`while (condition);`

pernyataan selalu dijalankan satu kali sebelum kondisi dicentang. (Untuk menjalankan beberapa pernyataan, gunakan block statement ({...}) untuk mengelompokkan pernyataan itu.)

Jika kondisinya benar, pernyataan dijalankan lagi. Di akhir setiap eksekusi, kondisinya diperiksa. Ketika kondisinya salah, eksekusi berhenti, dan kontrol lolos ke pernyataan berikut do ... while.

Contoh :
Dalam contoh berikut, do loop melakukan iterasi setidaknya satu kali dan mengulangi hingga i tidak lagi kurang dari 5.

`let i = 0;`

`do {`

`  i += 1;`

`  console.log(i);`

`} while (i < 5);`

## while statement
Pernyataan while mengeksekusi pernyataannya selama kondisi yang ditentukan bernilai true. Pernyataan while terlihat sebagai berikut:

`while (condition)`

`  statement`

Jika kondisinya menjadi salah, pernyataan dalam loop berhenti dijalankan dan kontrol lolos ke pernyataan yang mengikuti loop.

Uji kondisi terjadi sebelum pernyataan dalam loop dijalankan. Jika kondisi mengembalikan nilai true, pernyataan dieksekusi dan kondisi diuji lagi. Jika kondisi mengembalikan false, eksekusi berhenti, dan kontrol diteruskan ke pernyataan setelah sementara.

Untuk menjalankan beberapa pernyataan, gunakan block statement ({...}) untuk mengelompokkan pernyataan tersebut.

Contoh :
Perulangan while berikut ini berulang selama n kurang dari 3:

`let n = 0;`

`let x = 0;`

`while (n < 3) {`

`  n++;`

`  x += n;`

`}`

## labeled statement
Label memberikan pernyataan dengan pengenal yang memungkinkan Anda merujuknya di tempat lain dalam program Anda. Misalnya, Anda dapat menggunakan label untuk mengidentifikasi perulangan, dan kemudian menggunakan pernyataan break atau lanjutkan untuk menunjukkan apakah program harus menghentikan perulangan atau melanjutkan eksekusinya.

Sintaks dari pernyataan berlabel terlihat seperti berikut:

`label :`

`   statement`

Nilai label dapat berupa pengenal JavaScript apa pun yang bukan merupakan kata yang dipesan. Pernyataan yang Anda identifikasi dengan label dapat berupa pernyataan apa pun.

Contoh :

`var theMark = 10;`


`while (theMark == 10) {`

`   console.log("www");`

`   break;`

`}`

## break statement
Gunakan pernyataan break untuk menghentikan loop, switch, atau dalam hubungannya dengan pernyataan berlabel.

Contoh 1:

`let a = 10;`

`var theValue = 5;`


`for (let i = 0; i < a; i++) {`

`  console.log(i)`

`  if (i == theValue) {`

`    break;`

`  }`

`}`

Contoh 2: Breaking to a label

`let x = 0;`

`let z = 0;`

`labelCancelLoops: while (true) {`

`  console.log('Outer loops: ' + x);`

`  x += 1;`

`  z = 1;`

`  while (true) {`

`    console.log('Inner loops: ' + z);`

`    z += 1;`

`    if (z === 10 && x === 10) {`

`      break labelCancelLoops;`

`    } else if (z === 10) {`

`      break;`

`    }`

`  }`

`}`

## continue statement
Pernyataan continue dapat digunakan untuk memulai kembali pernyataan while, do-while, for, atau label.

- Ketika Anda menggunakan Continue tanpa label, itu menghentikan iterasi saat ini dari pelingkupan paling dalam while, do-while, atau untuk pernyataan dan melanjutkan eksekusi loop dengan iterasi berikutnya. Berbeda dengan pernyataan break, continue tidak menghentikan seluruh eksekusi loop. Dalam while loop, itu melompat kembali ke kondisi. Dalam loop for, ini melompat ke increment-expression.
- Saat Anda menggunakan Continue dengan label, ini berlaku untuk pernyataan perulangan yang diidentifikasi dengan label itu.

Sintaks pernyataan lanjutkan terlihat seperti berikut:

`continue [label];`

Contoh 1:

`let i = 0;`

`let n = 0;`


`while (i < 5) {`

`  i++;`

`  if (i === 3) {`

`    continue;`

`  }`

`  n += i;`

`  console.log(n);`

`}`

Contoh 2: with label

`let i = 0;`

`let j = 10;`


`checkiandj: while (i < 4) {`

`    console.log(i);`

`    i += 1;`

`    checkj: while (j > 4) {`

`        console.log(j);`

`        j -= 1;`

`        if ((j % 2) === 0) {`

`          continue checkj;`

`        }`

`        console.log(j + ' is odd.');`

`      }`

`      console.log('i = ' + i);`

`      console.log('j = ' + j);`

`  }`
