const http = require('http');
const fs = require('fs');
const path = require('path');
const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req,res)=>{
    console.log("Request for "+req.url + " with method of "+req.method);
    if(req.method == 'GET'){
        var fileUrl;
        if(req.url=='/') fileUrl='/index.html';
        else fileUrl = req.url;

        var filePath = path.resolve('./public'+fileUrl);
        const fileExt = path.extname(filePath);

        if(fileExt === '.html'){
            fs.exists(filePath, exists=>{
                if(!exists){
                    res.statusCode = 404;
                    res.setHeader('Content-type','text/html');
                    res.end('<html><body><h1> Error 404:'+fileUrl+" Not found.</h1></body></html>");
                }
                res.statusCode=200;
                res.setHeader('Content-type','text/html');
                fs.createReadStream(filePath).pipe(res);
            })
        }
        else{
            res.statusCode = 404;
            res.setHeader('Content-type','text/html');
            res.end('<html><body><h1> Error 404:'+fileUrl+" is not an html file.</h1></body></html>"); 
        }

    }
    else{
        res.statusCode=200;
        res.setHeader('Content-type','text/html');
        res.end('<html><body><h1> Error 404:'+req.method+' not supported</h1></body></html>');
    }
});

server.listen(port,hostname,()=>{
    console.log(`Server listening at http:\\${hostname}:${port}`);
})