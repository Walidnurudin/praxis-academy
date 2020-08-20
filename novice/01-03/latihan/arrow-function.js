// ARROW FUNCTION

// 1
let kaliDua = param => param * 2;

console.log(kaliDua(2))

// 2
var contoh = _ => console.log("walid")

contoh();

// No binding of ‘this’
var obj = {
    id: 42,
    counter: () => {
        setTimeout(() => {
            console.log(this.id);
        }, 1000);
    }
};

obj.counter() // undifined