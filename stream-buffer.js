const http = require('http')
const fs = require('fs')

// creating server using raw nodejs
const server = http.createServer()

server.on("request", (req, res)=> {
    if(req.url === '/read-file' && req.method === "GET");

    const readableStream = fs.createReadStream('./texts/read.txt')

    readableStream.on('data', (buffer)=> {
        res.write(buffer)
    })

    readableStream.on('end', ()=> {
        res.end("Hello from Emon")
    })

})

server.listen(5000, ()=>{
    console.log(`Server is listening on port 5000`);
})