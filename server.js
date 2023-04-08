const http = require('http');
const DbConnect = require('./models/DbConnect');
const { route } = require('./routes/route');
const port = 5000;


const startServer =  async () =>{
    try {
        await DbConnect()
        http.createServer(route).listen(port, ()=>console.log(`Server listen at port: ${port}`))
    } catch (error) {
        console.log(error.message);
    }
}

startServer()


// http.createServer(route).listen(port, ()=>console.log("Server listen at port:"+port))



