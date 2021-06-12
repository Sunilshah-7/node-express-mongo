const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('Retrieving all the promotions!');
})
.post((req,res,next)=>{
    res.end("Posting the promotion: "+req.body.name+" with details "+req.body.description);
})
.put((req,res,next)=>{
    res.statusCode = 403;
    res.end("PUT not supported for /promotions");
})
.delete((req,res,next)=>{
    res.end("Deleting all the promotions");
});

promoRouter.route('/:promoID')
.get((req,res,next)=>{
    res.end('Retrieving the promotion:'+req.params.promoID);
})
.post((req,res,next)=>{
    res.statusCode = 403;
    res.end('POST not supported for the /promotions/'+req.params.promoID);
})
.put((req,res,next)=>{
    res.write('Updating the promotion:'+req.params.promoID+"\n");
    res.end("Will send the promotion: "+req.body.name+" with details "+req.body.description);
})
.delete((req,res,next)=>{
    res.end('Deleting the promotion:'+req.params.promoID);
});

module.exports = promoRouter;