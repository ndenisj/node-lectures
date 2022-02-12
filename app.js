const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response',(name, id)=>{
    console.log(`Data sent with ${name} ${id}`);
})
customEmitter.on('response',()=>{
    console.log('Data sent');
})

customEmitter.emit('response', 'Denis', 56)