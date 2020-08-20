let h1 = document.getElementsByTagName('h1')[0];

function calculateDogAge(puppyAge, humanAge) {

    let pAge = (puppyAge * 7).toFixed(0);
    let hAge = (humanAge / 7).toFixed(0);

    return `Your doggie is ${pAge} years old in dog years!, and your is ${hAge} years old in dog years!`;
}

function onClick() {

    let dog = document.getElementById("dog").value;
    let human = document.getElementById("human").value;


    console.log(dog)
    h1.innerHTML = calculateDogAge(dog, human)
}