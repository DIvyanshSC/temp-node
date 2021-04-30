const path = require('path')

// console.log(path.sep)

const filePath = path.join('/content', 'generic-SubFolder', 'test.txt')
console.log(filePath);

const base = path.basename(filePath)
console.log(base)

const absolutePath = path.resolve(__dirname, 'content', 'generic-SubFolder', 'test.txt')
console.log(absolutePath)