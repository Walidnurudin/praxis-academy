let h1 = document.getElementsByTagName('h1')[0];

function calculateSupply(age, numPerDay) {
    var maxAge = 100;
    var totalNeeded = (numPerDay * 365) * (maxAge - age);
    
    return 'You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maxAge;
}

h1.innerHTML = calculateSupply(28, 36);;