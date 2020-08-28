const url = "https://jsonplaceholder.typicode.com/users";

function frame(i){
    return `<h3>${i.id}. ${i.name}</h3>
    <p>Website : ${i.website}</p>`
}

fetch(url)
    .then(response => response.json())
    .then(response => {
        console.log(response);

        let item = '';
        response.map(m => item += frame(m));
        
        const div = document.querySelector("div");
        div.innerHTML = item;
    })
    .catch(err => console.log(err));

