const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dboperation = require('./operations');
const url = 'mongodb://localhost:27017';
const dbname= 'conFusion';

// IMPORTANT COMMENT ABOUT JSON
// When you use + to show in the result, it will be [object Object]
// When you use , to show in the result, it will display the real object [{}]
MongoClient.connect(url).then((client)=>{
    console.log('Connected to database successfully.');
    const db = client.db(dbname);
    //const collection = db.collection('dishes');

    dboperation.insertDocument(db,{'name':'Vadonut','description':'Test'},"dishes")
    .then((result)=>{
        console.log("Insert document:\n ",result.ops);

        return dboperation.findDocuments(db,"dishes")
    })   
    .then((docs)=>{
            console.log("Found documents:\n",docs);

            return dboperation.updateDocument(db,{'name':'Vadonut'},{'description':'Updated Test'},"dishes");
    })
    .then((result)=>{
            console.log("Updated documents:\n",result.result);

            return dboperation.findDocuments(db,"dishes");
    })
    .then((docs)=>{
            console.log("Found updated documents:\n",docs);

            return db.dropCollection("dishes")
    })
    .then((result)=>{
            console.log("Dropped collection:",result);
            return client.close();
    })
    .catch((err)=>{
            console.log(err);
    })
})
.catch((err)=>{console.log(err)})