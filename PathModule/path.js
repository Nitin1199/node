const path = require('path');

// console.log(path.dirname('/home/nitinpal/simform/Node-Advanced/PathModule/path.js'));

// console.log(path.extname('/home/nitinpal/simform/Node-Advanced/PathModule/path.js'));

// console.log(path.basename('/home/nitinpal/simform/Node-Advanced/PathModule/path.js'));

console.log(path.parse('/home/nitinpal/simform/Node-Advanced/PathModule/path.js'));

// / Joining path segments to form a complete file path
const filePath = path.join(__dirname, 'files', 'example.txt');
console.log(filePath);