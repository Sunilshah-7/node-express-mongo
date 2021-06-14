const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dboperation = require('./operations');
const url = 'mongodb://localhost:27017';
const dbname= 'conFusion';

// IMPORTANT COMMENT ABOUT JSON
// When you use + to show in the result, it will be [object Object]
// When you use , to show in the result, it will display the real object [{}]
MongoClient.connect(url,(err,client)=>{
    assert.equal(err,null);
    console.log('Connected to database successfully.');

    const db = client.db(dbname);
    const collection = db.collection('dishes');

   dboperation.insertDocument(db,{'name':'Vadonut','description':'Test'},"dishes",(result)=>{
       console.log("Insert document:\n ",result.ops);

       dboperation.findDocuments(db,"dishes",(docs)=>{
           console.log("Found documents:\n",docs);

           dboperation.updateDocument(db,{'name':'Vadonut'},{'description':'Updated Test'},"dishes",(result)=>{
               console.log("Updated documents:\n",result.result);

               dboperation.findDocuments(db,"dishes",(docs)=>{
                   console.log("Found updated documents:\n",docs);

                    db.dropCollection("dishes",(result)=>{
                        console.log("Dropped collection:",result);
                        client.close();
                    })
               })
           })
       })
   })
})