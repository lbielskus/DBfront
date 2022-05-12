const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email:{
        type:String,
        required: true
    },
    profileImage:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required:true
    }


    // 1. User Model
    // userName: {
    //     type:String,
    //     required:true
    // },
    // marriedStatus:{
    //     type:Boolean,
    //     required:true
    // },
    // age:{
    //     type:Number,
    //     required:true
    // },
    // hobbies:{
    //     type:Array,
    //     required:true
    // }

    // 2. Car Model
    // maxSpeed: {
    //     type:Number,
    //     required:true
    // },
    // broken:{
    //     type:Boolean,
    //     required:true
    // },
    // fuelConsumption:{
    //     type:Number,
    //     required:true
    // },
    // name:{
    //     type:String,
    //     required:true
    // },
    // color:{
    //     type:String,
    //     required:true
    // }
})

module.exports = mongoose.model('userModel', userSchema)