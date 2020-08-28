// USING NODE
const https = require("https");
const urlB = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

https.get(urlB, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        console.log(JSON.parse(data))
    })
}).on('error', (err) => {
    console.log("error: " + err.message);
});