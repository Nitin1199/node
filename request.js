const http = require('http');

const data = JSON.stringify({
    userName: "Nitin Pal"
});

const options = {
    hostname: 'localhost',
    port: 8080,
    path: '/users',
    method: 'POST',
    headers: {
        'Content-Type': 'appliction/json',
        'Content-Length': data.length
    }
}
const request = http.get(options, (response) => {
    console.log(`Status Code : ${response.statusCode}`);
    console.log(response.headers);

    response.on('data', (chunks) => {
        console.log('This is chunks');
        console.log(chunks.toString());
    })
})


request.on('error', (err) => {
    console.log(err);
})

request.write(data);

request.end();