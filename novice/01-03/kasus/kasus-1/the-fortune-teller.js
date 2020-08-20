let h1 = document.getElementsByTagName('h1')[0];
let h2 = document.getElementsByTagName('h1')[1];
let h3 = document.getElementsByTagName('h1')[2];

function tellFortune(job, location, partner, numChildren) {
    return `You will be a ${job} in ${location}, and married to ${partner} with ${numChildren} kids`;
}

h1.innerHTML = tellFortune("Developer", "bandung", "hinata", 3);
h2.innerHTML = tellFortune("Frontend dev", "japan", "hinata", 2);
h3.innerHTML = tellFortune("Software engineer", "jakarta", "hinata", 3);