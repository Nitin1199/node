const cp = require('child_process');

var progs = {
    list: 'ls',
    copy: 'cp',
    folder: 'mkdir'
}

// const child = cp.spawn(progs.list, ["pub"]);

// child.stdout.on('data', (data) => {
//     console.log(`Data : ${data}`);
// });
// child.stderr.on('data', (err) => {
//     console.log(`Error : ${err}`);
// })

const copy = cp.spawn(progs.copy, ["spawn.js", "spawn1.js"]);

copy.on('exit', () => {
    console.log(`Copy process completed successfully`);
})