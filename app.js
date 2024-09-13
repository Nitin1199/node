const fs = require('fs');

fs.readFile('server.js', 'utf-8', (err, data) => {
    console.log(data);
})