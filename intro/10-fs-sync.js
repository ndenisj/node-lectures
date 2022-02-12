const {readFileSync, writeFileSync} = require('fs'); // destructured methods

const first = readFileSync('./content/first.txt', 'utf-8')
console.log(first);

writeFileSync('./content/second.txt', 'This is the second file', {flag: 'a'})