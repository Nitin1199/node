const cp = require('child_process');
const path = require('path');

const names = ["nit", "tin", "pal", "hai"]

const child = cp.fork("forkdata.js", {cwd: './modules'});

// child.on('message', (data) => {
//     console.log(`parent received, ${data}`);
// })

child.on('exit', () => {
    console.log(`child process terminated`);
})

const interval = setInterval(() => {
    child.send({name: "nitin", age: 22, city: "Vapi"});
}, 1000);

setTimeout(()=>{
    clearInterval(interval);
    child.kill();
}, 5000);