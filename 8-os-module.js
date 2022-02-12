const os = require('os');

// user Info
const userInfo = os.userInfo()
console.log(userInfo);

// system uptime
console.log(`System uptime is : ${os.uptime()} seconds`);

// current OS
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS);