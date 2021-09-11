const http = require('http'); 
const app = require('./app'); 
const port = 4003; 
 
const server = http.createServer(app); 
 
server.listen(port);