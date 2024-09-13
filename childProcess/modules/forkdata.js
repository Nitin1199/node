// const data = process.argv.slice(2);

// const sayHello = (names) => {
//     names.forEach(name => {
//         process.send(`Greetings ${name}`)
//     });
// }

// sayHello(data);
// console.log(data);

process.on('message', (data) => {
    console.dir(`Child received : ${JSON.stringify(data)}`, {color: true});
})