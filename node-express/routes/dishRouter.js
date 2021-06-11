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

module.exports = dishRouter;