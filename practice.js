const fs = require('fs')

// fs.writeFile('./data.json', '')

fs.readFile('./data.json', 'utf-8', (err, data) => {
    if(err) {
        console.log('Error ocuured while reading');
    }
    console.log(data);
})

const newObject = {
    name: "Nitin",
    id: 1,
    address: "Tulsi Vihar"
}

fs.appendFile('./da1ta.json', JSON.stringify(newObject), (err) => {
    if(err) {
        console.log(err);
    }
})