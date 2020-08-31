# Error handling, "try..catch"

Biasanya, skrip "mati" (segera berhenti) jika terjadi kesalahan, mencetaknya ke konsol.

Tetapi ada sintaksis try..catch yang memungkinkan kita untuk "menangkap" kesalahan dan melakukan sesuatu yang lebih masuk akal.

## “try…catch” syntax

Konstruksi try..catch memiliki dua blok utama: coba, lalu tangkap:

```
try {
  // code...
} catch (err) {
  // error handling
}
```

Ini bekerja seperti ini:

1. Pertama, kode dalam try {...} dijalankan.
2. Jika tidak ada kesalahan, maka "catch (err)" diabaikan: eksekusi mencapai akhir "try" dan melanjutkan, melewatkan "catch".
3. Jika terjadi kesalahan, maka eksekusi "try" dihentikan, dan kontrol mengalir ke awal "catch (err)". Variabel err (kita dapat menggunakan nama apapun untuk itu) akan berisi objek Error dengan detail tentang apa yang terjadi.
