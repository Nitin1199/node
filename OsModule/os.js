const os = require('os');

console.log(os.type());

console.log('Free Memory', os.freemem());

console.log('Total Memory:', os.totalmem());

console.log('Platform:', os.platform());
console.log('Architecture:', os.arch());
console.log('Total Memory (bytes):', os.totalmem());
console.log('Free Memory (bytes):', os.freemem());
console.log('CPUs:', os.cpus());