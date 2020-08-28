// Promise 
// Promise adalah salah fitur terbaru dari ES6. Mari kita mulai dari analogi sederhana. Anda janjian ketemuan dengan salah satu kolega anda, tiba-tiba kolega tersebut bertanya anda sudah dimana ? Ada beberapa kemungkinan jawaban disini : dalam perjalanan, sudah sampai atau janjinya di batalkan.

// 1. Pending = keadaan awal, tidak dipenuhi atau ditolak.
// 2. Fullfiled = artinya operasi selesai dengan sukses.
// 3. Rejected = artinya operasi gagal.

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("sukses!");
        // reject("error");
    }, 1000)
});

promise1
    .then((val) => {
        console.log(val)
    })
    .catch((err) => {
        console.log(err)
    })