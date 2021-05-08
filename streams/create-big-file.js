const { writeFileSync } = require('fs')
for(let i = 0; i < 100000; i++) {
    writeFileSync('./stream-content/big.txt', `hello world ${i}\n`, { flag: 'a'})
}