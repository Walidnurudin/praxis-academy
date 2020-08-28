// Callback disebut juga dengan high-order function. Callback sebenarnya adalah function, bedanya dengan function pada umumnya adalah di cara eksekusinya. Jika function pada umumnya di eksekusi secara langsung sedangkan callback di eksekusi dalam function lain melalui parameter.

// 1
function main(param1, param2, callback){
    console.log(param1, param2);
    callback();
}

function myCallback(){
    console.log("this is callback");
}

main(1, 2, myCallback);
// 1 2
// this is callback



// 2
function p1(){
    console.log("p1 done");
}

function p2(callback){
    setTimeout(function(){
        console.log("p2 done");
        callback();
    }, 1000)
}

function p3(){
    console.log("p3 done");
}

p1();
p2(p3);
// p1 done
// p2 done
// p3 done