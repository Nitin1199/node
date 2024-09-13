const EventEmitter = require('events');

const event = new EventEmitter();

event.on('sayMyName', () => {
    console.log('XYZ bsdf');
})

event.emit('sayMyName');

// passing args to namedEvents
event.on('params', (arg1, arg2) => {
    console.log('Event raised:', arg1, arg2);
});

event.emit('params', 'req', 'res');

// adding on time liner
// event.once('end', () => {});

// removing event listeners
// event.removeListener('end', () => {});