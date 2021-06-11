const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dishRouter = require('./routes/dishRouter');

const hostname = 'localhost';
const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(__dirname+'/public'));
app.use('/dishes',dishRouter);

app.get('/dishes/:dishID',(req,res,next)=>{
    res.end('Retrieving the dish:'+req.params.dishID);
});

app.post('/dishes/:dishID',(req,res,next)=>{
    res.statusCode = 403;
    res.end('POST not supported for the /dishes/:dishID');
});

app.put('/dishes/:dishID',(req,res,next)=>{
    res.end('Updating the dish:'+req.params.dishID + " with name :"+req.body.name+" and details:"+req.body.description);
});

app.delete('/dishes/:dishID',(req,res,next)=>{
    res.end('Deleting the dish:'+req.params.dishID);
});

app.use((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-type','text/html');
    res.end('<html><body><h1>This is an Express Server.</h1></body></html>');
});

const server = http.createServer(app);

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}`);
})