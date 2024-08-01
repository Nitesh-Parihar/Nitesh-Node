const mongoose = require('mongoose');


const tourSchema = new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        trim:true
     
    },
    rating:{
        type:Number,
        default:4.5
    },
    price:{
        type:Number,

    },
    duration:{
        type:Number,
        
    },
    maxGroupSize:{
        type:Number,
        
    },
    difficulty:{
        type:String,
        
    },
    summary:{
        type:String,
        trim:true,
    
    },
   
    createdAt:{
        type:Date,
        default:Date.now()
    },
})

const Tour = mongoose.model('Tour',tourSchema)

module.exports = Tour