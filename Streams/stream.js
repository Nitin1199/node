const fs = require('fs');
const http = require('http');

const server = http.createServer();


server.on('request', (req, res) => {
    // fs.readFile("../practice.ts", (err, data) => {
    //     if(err) console.error(err);
    //     res.end(data.toString());
    // })
    const rsStream = fs.createReadStream('./data.txt');

    rsStream.on('data', (chunks) => {
        res.write(chunks);
    });

    rsStream.on('end', () => {
        res.end();
    });

    rsStream.on('error', (err) => {
        console.log('Error : ', err);
        res.end('File not found');
    })
})


server.listen(8080);