const http =require('http');
const app = require('./app');
const PORT  = 9006;

http.createServer(app).listen(PORT,() => {
    console.log(`Server is running on port no ${PORT}`)
})