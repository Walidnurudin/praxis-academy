function celsiusToFahrenheit(c) {
    let jumlah = (c * (9 / 5)) + 32;
    return `${c}°C is ${jumlah}°F`;
}

function onClickC(){
    let inputC = document.getElementById("celsius").value;
    let h1C = document.getElementsByTagName("h2")[0]

    h1C.innerHTML = celsiusToFahrenheit(inputC);
}


function fahrenheitToCelsius(f) {
    let jumlah = (f - 32) * (5 / 9);
    return `${f}°F is ${jumlah}°C`;
}

function onClickF(){
    let inputF = document.getElementById("fahrenheit").value;
    let h1F = document.getElementsByTagName("h2")[1]

    h1F.innerHTML = fahrenheitToCelsius(inputF);
}