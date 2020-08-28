// Async-await
// Async/await adalah fitur yang hadir sejak ES2017. Fitur ini mempermudah kita dalam menangani proses asynchronous.

// 1
function a(){
    return new Promise((resolve) => {
    setTimeout(() => {
        return resolve("pertama")
    }, 1500)
})}

function b(){
    return new Promise((resolve) => {
    setTimeout(() => {
        return resolve("kedua")
    }, 3000)
})}

function c(){
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve("ketiga")
    }, 1000)
})}

async function asyncSerial(){
    let a1 = await a();
    let b1 = await b();
    let c1 = await c();
    return `${a1} - ${b1} - ${c1}`;
}

asyncSerial().then((item) => {
    console.log(item)
})


// 2
function doubleAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x * 2);
      }, 2000);
    });
  }
  
  async function addAsync(x) {
    const a = await doubleAfter2Seconds(10);
    const b = await doubleAfter2Seconds(20);
    const c = await doubleAfter2Seconds(30);
    return x + a + b + c;
  }
  
  
  addAsync(10).then((sum) => {
    console.log(sum);
  });