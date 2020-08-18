# Program Structure

## Expressions and statements
The simplest kind of statement is an expression with a semicolon after it. This is a program:


<code>1;</code>
<code>!false;</code>


## Bindings
Bagaimana sebuah program mempertahankan status internal? Bagaimana cara mengingat sesuatu? Kita telah melihat bagaimana menghasilkan nilai-nilai baru dari nilai-nilai lama, tetapi ini tidak mengubah nilai-nilai lama, dan nilai-nilai baru harus segera digunakan atau akan hilang lagi. Untuk menangkap dan menahan nilai, JavaScript menyediakan sesuatu yang disebut binding, atau variabel:

<code>let caught = 5 * 5;</code>

Itu adalah pernyataan jenis kedua. Kata khusus (kata kunci) let menunjukkan bahwa kalimat ini akan mendefinisikan pengikatan. Ini diikuti dengan nama binding dan, jika kita ingin segera memberinya nilai, dengan operator = dan ekspresi.

## Binding names
Nama yang mengikat bisa berupa kata apa saja. Digit dapat menjadi bagian dari nama yang mengikat — catch22 adalah nama yang valid, misalnya — tetapi nama tidak boleh dimulai dengan digit. Nama yang mengikat dapat menyertakan tanda dolar ($) atau garis bawah (_) tetapi tidak ada tanda baca atau karakter khusus lainnya.

## The environment
Kumpulan binding dan nilainya yang ada pada waktu tertentu disebut lingkungan. Saat sebuah program dijalankan, lingkungan ini tidak kosong. Itu selalu berisi binding yang merupakan bagian dari standar bahasa, dan sebagian besar waktu, juga memiliki binding yang menyediakan cara untuk berinteraksi dengan sistem di sekitarnya. Misalnya pada browser, terdapat fungsi untuk berinteraksi dengan website yang sedang dimuat dan untuk membaca input mouse dan keyboard.

## Functions
Banyak nilai yang diberikan di lingkungan default memiliki fungsi tipe. Fungsi adalah bagian dari program yang dibungkus dengan nilai. Nilai-nilai tersebut dapat diterapkan untuk menjalankan program yang dibungkus. Misalnya, di lingkungan browser, perintah pengikatan memegang fungsi yang menampilkan kotak dialog kecil yang meminta masukan pengguna.

## The console.log function
Dalam contoh, saya menggunakan console.log untuk menghasilkan nilai. Sebagian besar sistem JavaScript (termasuk semua browser web modern dan Node.js) menyediakan fungsi console.log yang menuliskan argumennya ke beberapa perangkat keluaran teks. Di browser, keluarannya berada di konsol JavaScript. Bagian dari antarmuka browser ini tersembunyi secara default, tetapi sebagian besar browser membukanya saat Anda menekan F12 atau, di Mac, command-option-I. Jika itu tidak berhasil, cari melalui menu untuk item bernama Alat Pengembang atau serupa.

## Return values
Menampilkan kotak dialog atau menulis teks ke layar adalah efek samping. Banyak fungsi yang berguna karena efek samping yang dihasilkannya. Fungsi juga dapat menghasilkan nilai, dalam hal ini tidak perlu memiliki efek samping agar berguna. Misalnya, fungsi Math.max mengambil sejumlah argumen angka dan mengembalikan yang terbesar.

<code>console.log(Math.max(2, 4));</code>
<code>// → 4</code>

 Di sini panggilan ke Math.min, yang merupakan kebalikan dari Math.max, digunakan sebagai bagian dari ekspresi plus:

 <code>console.log(Math.min(2, 4) + 100);</code>
 <code>// → 102</code>

## Control flow
Ketika program Anda berisi lebih dari satu pernyataan, pernyataan dijalankan seolah-olah itu adalah sebuah cerita, dari atas ke bawah. Program contoh ini memiliki dua pernyataan. Yang pertama menanyakan nomor kepada pengguna, dan yang kedua, yang dieksekusi setelah yang pertama, menunjukkan kuadrat dari nomor itu.

<code>let theNumber = Number(prompt("Pick a number"));</code>
<code>console.log("Your number is the square root of " +</code>
    <code>theNumber * theNumber);</code>

Fungsi Nomor mengubah nilai menjadi angka. Kami membutuhkan konversi itu karena hasil dari prompt adalah nilai string, dan kami menginginkan angka. Ada fungsi serupa yang disebut String dan Boolean yang mengonversi nilai menjadi tipe tersebut.

## Conditional execution
Tidak semua program adalah jalan lurus. Kita mungkin, misalnya, ingin membuat jalan bercabang, di mana program mengambil cabang yang tepat berdasarkan situasi yang dihadapi. Ini disebut conditional execution.

## while and do loops
Pertimbangkan program yang mengeluarkan semua bilangan genap dari 0 hingga 12. Salah satu cara untuk menulisnya adalah sebagai berikut:


<code>console.log(0);</code>
<code>console.log(2);</code>
<code>console.log(4);</code>
<code>console.log(6);</code>
<code>console.log(8);</code>
<code>console.log(10);</code>
<code>console.log(12);</code>


Itu berhasil, tetapi gagasan menulis program adalah membuat sesuatu menjadi lebih sedikit, tidak lebih. Jika kita membutuhkan semua bilangan genap kurang dari 1.000, pendekatan ini tidak akan bisa diterapkan. Yang kita butuhkan adalah cara menjalankan sepotong kode beberapa kali. Bentuk aliran kontrol ini disebut loop.

Alur kontrol perulangan memungkinkan kita untuk kembali ke beberapa titik dalam program di mana kita sebelumnya dan mengulanginya dengan status program kita saat ini. Jika kita menggabungkan ini dengan pengikatan yang diperhitungkan, kita dapat melakukan sesuatu seperti ini:

<code>let number = 0;</code>
<code>while (number <= 12) {</code>
<code>console.log(number);</code>
<code>  number = number + 2;</code>
<code>}</code>
<code>// → 0</code>
<code>// → 2</code>
<code>//   … etcetera</code>

## Indenting Code
Peran lekukan di dalam blok ini adalah untuk membuat struktur kode menonjol. Dalam kode di mana blok baru dibuka di dalam blok lain, akan sulit untuk melihat di mana satu blok berakhir dan blok lainnya dimulai. Dengan lekukan yang tepat, bentuk visual program sesuai dengan bentuk blok di dalamnya. Saya suka menggunakan dua spasi untuk setiap blok terbuka, tetapi rasanya berbeda — beberapa orang menggunakan empat spasi, dan beberapa orang menggunakan karakter tab. Yang penting adalah setiap blok baru menambahkan jumlah ruang yang sama.

<code>if (false != true) {</code>
<code>  console.log("That makes sense.");</code>
<code>  if (1 < 2) {</code>
<code>    console.log("No surprise there.");</code>
<code>  }</code>
<code>}</code>

## for loops
Banyak loop mengikuti pola yang ditunjukkan pada contoh while. Pertama, pengikatan "counter" dibuat untuk melacak kemajuan loop. Kemudian muncul while loop, biasanya dengan ekspresi tes yang memeriksa apakah penghitung telah mencapai nilai akhirnya. Di akhir badan perulangan, penghitung diperbarui untuk melacak kemajuan.

Karena pola ini sangat umum, JavaScript dan bahasa serupa menyediakan bentuk yang sedikit lebih pendek dan lebih komprehensif, perulangan for.

<code>for (let number = 0; number <= 12; number = number + 2) {</code>
<code>  console.log(number);</code><code>
<code>}</code>
<code>// → 0</code>
<code>// → 2</code>
<code>//   … etcetera</code>

## Breaking Out of a Loop
Memiliki kondisi looping menghasilkan false bukanlah satu-satunya cara penyelesaian loop. Ada pernyataan khusus yang disebut break yang memiliki efek melompat keluar dari loop penutup.

Program ini menggambarkan pernyataan istirahat. Ia menemukan angka pertama yang lebih besar dari atau sama dengan 20 dan habis dibagi 7.


<code>for (let current = 20; ; current = current + 1) {</code>
<code>  if (current % 7 == 0) {</code>
<code>    console.log(current);</code>
<code>    break;</code>
<code>  }</code>
<code>}</code>
<code>// → 21</code>


## Updating bindings succinctly
Terutama saat melakukan perulangan, program sering kali perlu "update" pengikatan untuk menyimpan nilai berdasarkan nilai pengikatan sebelumnya.

<code>counter = counter + 1;</code>

JavaScript menyediakan jalan pintas untuk ini.

<code>counter += 1;</code>

## Dispatching on a value with switch
Ada konstruksi yang disebut sakelar yang dimaksudkan untuk mengekspresikan "pengiriman" semacam itu dengan cara yang lebih langsung. Sayangnya, sintaksis JavaScript yang digunakan untuk ini (yang diwarisi dari bahasa pemrograman C / Java) agak janggal — rangkaian pernyataan if mungkin terlihat lebih baik. Berikut ini contohnya:

<code>switch (prompt("What is the weather like?")) {</code>
<code>  case "rainy":</code>
<code>    console.log("Remember to bring an umbrella.");</code>
<code>    break;</code>
<code>  case "sunny":</code>
<code>    console.log("Dress lightly.");</code>
<code>  case "cloudy":</code>
<code>    console.log("Go outside.");</code>
<code>    break;</code>
<code>  default:</code>
<code>    console.log("Unknown weather type!");</code>
<code>    break;</code>
<code>}</code>

## Capitalization
Nama binding mungkin tidak berisi spasi, namun sering kali berguna menggunakan beberapa kata untuk mendeskripsikan dengan jelas apa yang diwakili oleh binding. Ini adalah cukup banyak pilihan Anda untuk menulis nama yang mengikat dengan beberapa kata di dalamnya:

<code>fuzzylittleturtle</code>
<code>fuzzy_little_turtle</code>
<code>FuzzyLittleTurtle</code>
<code>fuzzyLittleTurtle</code>


## Comments
Komentar adalah sepotong teks yang merupakan bagian dari program tetapi diabaikan sama sekali oleh komputer. JavaScript memiliki dua cara untuk menulis komentar. Untuk menulis komentar satu baris, Anda dapat menggunakan dua karakter garis miring (//) dan kemudian teks komentar setelahnya.

Sebuah // komentar hanya sampai di akhir baris. Bagian teks antara / * dan * / akan diabaikan secara keseluruhan, terlepas dari apakah teks tersebut berisi jeda baris. Ini berguna untuk menambahkan blok informasi tentang file atau bagian dari program.

<code>/*</code>
<code> I first found this number scrawled on the back of an old notebook.</code>
<code>  Since then, it has often dropped by, showing up in phone numbers</code>
<code>  and the serial numbers of products that I've bought. It obviously</code>
<code>  likes me, so I've decided to keep it.</code>
<code>*/</code>

## Summary
Anda sekarang tahu bahwa program dibangun dari pernyataan, yang terkadang berisi lebih banyak pernyataan. Pernyataan cenderung berisi ekspresi, yang dengan sendirinya dapat dibangun dari ekspresi yang lebih kecil.

Menempatkan pernyataan satu sama lain memberi Anda program yang dieksekusi dari atas ke bawah. Anda bisa memperkenalkan gangguan dalam aliran kontrol dengan menggunakan pernyataan bersyarat (if, else, dan switch) dan perulangan (while, do, dan for).

Binding dapat digunakan untuk mengarsipkan potongan data di bawah sebuah nama, dan berguna untuk melacak status dalam program Anda. Lingkungan adalah sekumpulan binding yang ditentukan. Sistem JavaScript selalu menempatkan sejumlah binding standar yang berguna ke dalam lingkungan Anda.

Fungsi adalah nilai khusus yang merangkum sebuah program. Anda bisa memanggilnya dengan menulis functionName (argument1, argument2). Panggilan fungsi seperti itu adalah ekspresi dan dapat menghasilkan nilai.