// Rekursi = Fungsi Yang Memanggil Dirinya Sendiri

function countdown(i) {
    console.log(i);
    
    if (i <= 0) {
        return;
    } else {
        countdown(i - 1);
    }
}
countdown(10);