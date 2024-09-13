const cp = require('child_process');
const fs = require('fs');

const progs = {
    list: 'ls'
}

const err = fs.openSync("./logs/err.txt", "a");
const child = cp.spawn(progs.list, ["-a", "pub"], {stdio: ["ignore", "inherit", err]});

// child.stdout.on("data", (data) => {
//     console.log(data.toString());
// })