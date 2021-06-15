const mongoose = require('mongoose');
const Dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url,{ useNewUrlParser: true });

connect.then((db)=>{
    console.log("Connected succesfully to the database");

    var newDish = Dishes({
        name:'Uthappizza',
        description:'test'
    });

    newDish.save()
        .then((dish)=>{
            console.log(dish);
            return Dishes.find({});
        })
        .then((dishes)=>{
            console.log(dishes);
            return Dishes.deleteMany({});
        })
        .then(()=>{
            return mongoose.connection.close();
        })
        .catch((err)=>{
            console.log(err);
        })
})