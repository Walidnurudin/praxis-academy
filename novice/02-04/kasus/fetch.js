const url = "https://jsonplaceholder.typicode.com/users";

function frame(i){
    return `<h3>${i.id}. ${i.name}</h3>
    <p>Website : ${i.website}</p>
    <p>Phone : ${i.phone}</p>
    <hr>`
}



// PROMISE
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then(response => {
//         console.log("promise", response);

//         let item = '';
//         response.map(m => item += frame(m));

//         const div = document.querySelector("div");
//         div.innerHTML = item;
//     })
//     .catch(err => console.log(err));



// USING ASYNC-AWAIT
function getJson(){
    return fetch(url)
        .then(res => res.json())
        .catch(err => console.log(err))
}

(async function showJson(){
    const item = await getJson();
    console.log("using async await", item);
    let result = '';
    item.map(item => result += frame(item));
    document.querySelector("div").innerHTML = result;
}());



