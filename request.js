var http = require('http');
const PORT = 2000;

const server = http.createServer();
server.on('request',(req,res) => {
    if(req.url === '/details') {
        res.statusCode = 200;
        res.setHeader('Content-type', 'application/json');
        res.end(JSON.stringify({
            'id': 1,
            'name': 'john doe',
            'addrees': 'chicago',
        }))
    } else if(req.url === '/messages') {
      res.setHeader('Content-type', 'text/html')
      res.write('<html>')
      res.write('<body>')
      res.write('<ul>')
      res.write('<li>My name is make doe</li>')
      res.write('<li>I am from los angeles</li>')
      res.write('</ul>')
      res.write('</body>')
      res.write('</html>')
      res.end();
    } else {
      res.statusCode = 404;
      res.end();
    }
}).listen(PORT, () => {
    console.log('Server is Running');
})