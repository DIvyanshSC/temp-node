var http = require('http')
var fs = require('fs')

http.createServer(function (req, res) {
    // const text = fs.readFileSync('./stream-content/big.txt', 'utf8')
    // return res.end(text)

    const fileStream = fs.createReadStream('./stream-content/big.txt', 'utf8');
    fileStream.on('open', () => {
        fileStream.pipe(res)
    })
    fileStream.on('error',(err) => {
        return res.end(err)
    })
})
.listen(5000)