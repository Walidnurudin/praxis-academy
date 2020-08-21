# Reguler expression

Sintax

`/<pola yang dicari>/<modifier>`

## Modifier(Pengubah)
JavaScript nyediain 3 modifier yang bisa kita pake yaitu :

g : global, cari semua yang cocok.
i : ignore case, huruf besar & huruf kecil sama aja
m : multiline, cari di semua baris teks, jangan berenti biarpun ketemu karakter line-break.

## Character Class(kelas karakter)
Token	Artinya
.	Sebarang karakter
\d	Sebarang angka, 1 digit, 0 – 9
\D	Sebarang karakter yang bukan angka
\w	Sebarang angka atau huruf kecil & besar termasuk underscore
\W	Sebarang karakter yang bukan huruf, angka, atau underscore
\s	Karakter whitespace, spasi, tab, line-break

Token . artinya sebarang karakter kecuali line-break (\n , \r).

## Boundary / Anchor(Batas / Jangkar)
Token boundary mendefinisikan batas awal/akhir teks yang diproses.

Token	Artinya
^	Awal baris
$	Akhir baris
\b	Batas awal / akhir kata. Antara huruf/angka dan spasi

## Quantifier(pembilang)
Token	Artinya
*	0 atau lebih, sebanyak-banyaknya
+	1 atau lebih, sebanyak-banyaknya
{m,n}	minimal m , maksimal n
?	0 atau 1

## Character Set
Token ini mendefinisikan sekelompok karakter yang ingin kita cari. Sintaksnya pake kurung siku [ ]. Set bisa berisi pilihan beberapa karakter atau range seperti huruf a-z , angka 1-100, dll.

## Alternation
Ini token sederhana, |. Fungsinya mirip dengan pencabangan if-else. Kalo satu pola ga ketemu, cari pola satunya.

## GROUP
Group memungkinkan kita membuat kelompok ekspresi yang akan diproses secara terpisah dari ekspresi lainnya dalam satu regex yang sama. Regex yang dijalankan dalam sebuah grup ditulis dalam tanda kurung.

Selain fungsi di atas, group juga memungkinkan kita mengakses hasil regex setiap grup sebagai sebuah variabel untuk diproses lagi di program kita. Untuk mengakses hasil regex sebagai variabel, kita perlu pake fungsi exec(). Contohnya,

## NEGATIVE LOOKAHEAD
Contoh group di atas pake ekspresi yang namanya Positive Lookahead. Artinya, teks yang dicari dalam grup harus ketemu. Negative Lookahead adalah kebalikannya, teks/pola dalam group ga boleh ada.