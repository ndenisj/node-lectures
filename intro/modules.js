const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-exports');
require('./7-mind-grenade');

console.log(data);
sayHi('Paul')
sayHi(names.john)