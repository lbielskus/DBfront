const mongoose = require('mongoose')
const Schema = mongoose.Schema

const carSchema = new Schema({
    // 2. Car Model
    maxSpeed: {
        type:Number,
        required:true
    },
    broken:{
        type:Boolean,
        required:true
    },
    fuelConsumption:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('carModel', carSchema)