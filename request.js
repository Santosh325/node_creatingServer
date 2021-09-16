var http = require('http');
const PORT = 2000;
http.createServer((req,res) => {
    res.writeHead(200, { 'Content-Type': 'application/json'});
    res.end(JSON.stringify({
        'id': 1,
        'name': "john doe",
        "address": "Philadhelpia"
    }))
}).listen(PORT,() => {
    console.log('Server is runngin');
});