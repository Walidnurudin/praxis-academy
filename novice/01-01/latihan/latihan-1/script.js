const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';


// CONDITIONAL
let iceCream = 'chocolate';
if(iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');    
} else {
  alert('Awwww, but chocolate is my favorite...');    
}

// FUNCTION
function multiply(num1,num2) {
    let result = num1 * num2;
    console.log(result);
}

multiply(5, 10);

document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}