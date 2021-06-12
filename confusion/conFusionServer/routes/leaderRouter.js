const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('Retrieving all the leaders!');
})
.post((req,res,next)=>{
    res.end("Posting the leader: "+req.body.name+" with details "+req.body.description);
})
.put((req,res,next)=>{
    res.statusCode = 403;
    res.end("PUT not supported for /leaders");
})
.delete((req,res,next)=>{
    res.end("Deleting all the leaders");
});

leaderRouter.route('/:leaderID')
.get((req,res,next)=>{
    res.end('Retrieving the leader:'+req.params.leaderID);
})
.post((req,res,next)=>{
    res.statusCode = 403;
    res.end('POST not supported for the /leaders/'+req.params.leaderID);
})
.put((req,res,next)=>{
    res.write('Updating the leaders:'+req.params.leaderID+"\n");
    res.end("Will send the leaders: "+req.body.name+" with details "+req.body.description);
})
.delete((req,res,next)=>{
    res.end('Deleting the leaders:'+req.params.leaderID);
});

module.exports = leaderRouter;