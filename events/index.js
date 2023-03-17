// Todo 1
const { EventEmitter } = require('events')
const birthdayEventListener = (name) => {
    console.log(`Happy Birthday ${name}`);
}

// Todo 2
const myEmitter = new EventEmitter();
// Todo 3
myEmitter.on('birthday', birthdayEventListener);
// Todo 4
myEmitter.emit('birthday','Rio Defa');