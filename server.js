const http = require('http');
const { route } = require('./routes/route');
const port = 5000;

http.createServer(route).listen(port, ()=>console.log("Server listen at port:"+port))



