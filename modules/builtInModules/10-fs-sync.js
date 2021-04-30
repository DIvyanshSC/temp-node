const { readFileSync, writeFileSync } = require('fs');
// const fs = require('fs');
// fs.readFileSync;

const first = readFileSync('./new-content/first.txt','utf8')
const second = readFileSync('./new-content/second.txt','utf8');


// console.log(first, second)

writeFileSync('./new-content/result-sync.txt',`Here is the result : ${first}, ${second}`, {flag: 'a'})