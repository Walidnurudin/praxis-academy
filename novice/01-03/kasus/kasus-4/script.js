function calcCircumfrence(radius) {
    // keliling
    let keliling = 2 * 3.14 * radius;

    // luas
    let luas = 3.14 * (radius ** 2);

    return `The circumference is ${keliling}, The area is ${luas}`;
}

function onClick(){
    let h1 = document.getElementsByTagName('h1')[0];
    let rad = document.getElementById('radius').value;

    h1.innerHTML = calcCircumfrence(rad);
}