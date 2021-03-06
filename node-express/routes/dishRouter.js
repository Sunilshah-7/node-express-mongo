const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('Retrieving all the dishes!');
})
.post((req,res,next)=>{
    res.end("Posting the dish: "+req.body.name+" with details "+req.body.description);
})
.put((req,res,next)=>{
    res.statusCode = 403;
    res.end("PUT not supported for /dishes");
})
.delete((req,res,next)=>{
    res.end("Deleting all the dishes");
});

dishRouter.route('/:dishID')
.get((req,res,next)=>{
    res.end('Retrieving the dish:'+req.params.dishID);
})
.post((req,res,next)=>{
    res.statusCode = 403;
    res.end('POST not supported for the /dishes/'+req.params.dishID);
})
.put((req,res,next)=>{
    res.write('Updating the dish:'+req.params.dishID+"\n");
    res.end("Will send the dish: "+req.body.name+" with details "+req.body.description);
})
.delete((req,res,next)=>{
    res.end('Deleting the dish:'+req.params.dishID);
});

module.exports = dishRouter;