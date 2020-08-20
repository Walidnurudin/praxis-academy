// Function hoisting(only function declaration)
// fungsi selalu dapat digunakan sebelum dibuat, selama penggunaannya dalam cakupan yang sama.

function contoh() {
    nested();

    function nested() {
        console.log("nested")
    }
}

contoh(); // nested