const mongoose = require('mongoose');
const Dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url,{ useNewUrlParser: true });

connect.then((db)=>{
    console.log("Connected succesfully to the database");

    Dishes.create({
        name:'Uthappizza',
        description:'test'
    })
    .then((dish)=>{
        console.log(dish);
        return Dishes.findByIdAndUpdate(dish._id,{
            $set:{description:'Updated test'}
        },{
            new:true
        }).exec();
    })
    .then((dish)=>{
        console.log(dish);
        dish.comment.push({
            rating:4,
            comment:"It is good.",
            author:"Vasdo Lorde"
        })
        return dish.save();
    })
    .then((dish)=>{
        console.log(dish);
        return Dishes.deleteOne({});
    })
    .then(()=>{
        return mongoose.connection.close();
    })
    .catch((err)=>{
        console.log(err);
    })
})