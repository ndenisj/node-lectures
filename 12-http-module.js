const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        console.log(req);
        res.end('Welcome to the home')
    }
    if(req.url === '/about'){
        res.end('Welcome to the About')
    }

    res.end(`
    <h1> ooPs </h1>
    <a href="/">Home</a>
    `)
})


server.listen(5000)