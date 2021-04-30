const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/') {
        return res.end('Welcome to our home page') // always add return, it resolves the errors writeFileSent 6:07:00 see it in tutorial
    }
    if(req.url === '/about') {
        return res.end('Here is our short history') // always add return
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
    `)
})
server.listen(5000)