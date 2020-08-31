# Custom errors

Saat kita mengembangkan sesuatu, kita sering membutuhkan "Error class" kita sendiri untuk mencerminkan hal-hal spesifik yang mungkin salah dalam tugas kita.Untuk kesalahan dalam operasi jaringan, kita mungkin memerlukan HttpError, untuk operasi database DbError, untuk operasi pencarian NotFoundError dan sebagainya.

Error kami harus mendukung properti Error dasar seperti pesan, nama dan stack.

Berikut contoh membuat Costum Error dengan ES6:

```
class MyError extends Error {}
```
