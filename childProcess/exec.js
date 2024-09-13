const cp = require('child_process');

// child_process.exec(command, {options}, {callback});

const progs = {
    list: 'ls',
    remove: 'rm'
}


const child = cp.exec(progs.list + ' pub', (err, stdout, stderr) => {
    if(err) {
        console.log(`err : ${err.name} , ${err.message}, ${err.stack}`);
    }
    console.log(`stdout : ${stdout}`);
})

// const child2 = cp.exec(progs.remove + ' -r data.json', (err, stdout, stderr) => {
//     if(err) {
//         console.log(`Name : ${err.name} \n Message- ${err.message} -\nStack- ${err.stack}`);
//     }
//     console.log(stdout);
// });