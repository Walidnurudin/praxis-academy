# Conditional statements

## if..else
Gunakan pernyataan if untuk menjalankan pernyataan jika kondisi logika benar. Gunakan klausa else opsional untuk menjalankan pernyataan jika kondisinya salah.

`if (condition) {`

`  statement_1;`

`} else {`

`  statement_2;`

`}`

Di sini, kondisinya dapat berupa ekspresi apa pun yang mengevaluasi benar atau salah. (Lihat Boolean untuk penjelasan tentang apa yang mengevaluasi benar dan salah.)

Anda juga dapat menggabungkan pernyataan menggunakan else if untuk menguji beberapa kondisi secara berurutan, sebagai berikut:

`if (condition_1) {`

`  statement_1;`

`} else if (condition_2) {`

`  statement_2;`

`} else if (condition_n) {`

`  statement_n;`

`} else {`

`  statement_last;`
`}`

Dalam kasus beberapa kondisi, hanya kondisi logis pertama yang bernilai true yang akan dijalankan. Untuk menjalankan beberapa pernyataan, kelompokkan mereka dalam pernyataan blok ({…}).

Contoh :
`let isi = prompt("masukan nilainya");`

`if(isi > 90){`

`  alert("Nilai A");`

`}else if(isi > 80){`

`  alert("Nilai B");`

`}else if(isi > 70){`

`  alert("nilai C")`

`}else{`

`  alert("nilai D")`

`}`

## Switch
Pernyataan switch memungkinkan program mengevaluasi ekspresi dan mencoba mencocokkan nilai ekspresi ke label kasus. Jika kecocokan ditemukan, program menjalankan pernyataan terkait.

Pernyataan switch terlihat seperti ini:

`switch (expression) {`

`  case label_1:`

`    statements_1`

`    [break;]`

`  case label_2:`

`    statements_2`

`    [break;]`

`    …`

`  default:`

`    statements_def`

`    [break;]`

`}`

Pernyataan break opsional yang terkait dengan setiap klausa kasus memastikan bahwa program keluar dari sakelar setelah pernyataan yang cocok dijalankan, dan kemudian melanjutkan eksekusi pada pernyataan yang mengikuti sakelar. Jika break dihilangkan, program melanjutkan eksekusi di dalam pernyataan switch (dan akan mengevaluasi kasus berikutnya, dan seterusnya).

Contoh :
`let fruittype = prompt("Masukan buah")`


`switch (fruittype) {`

`  case 'Oranges':`

`    console.log('Oranges are $0.59 a pound.');`

`    break;`

`  case 'Apples':`

`    console.log('Apples are $0.32 a pound.');`

`    break;`

`  case 'Bananas':`

`    console.log('Bananas are $0.48 a pound.');`

`    break;`

`  case 'Cherries':`

`    console.log('Cherries are $3.00 a pound.');`

`    break;`

`  case 'Mangoes':`

`    console.log('Mangoes are $0.56 a pound.');`

`    break;`

`  case 'Papayas':`

`    console.log('Mangoes and papayas are $2.79 a pound.');`

`    break;`

`  default:`

`   console.log(`Sorry, we are out of ${fruittype}.`);`

`}`