const express = require('express')
const cors = require("cors")
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()

const mainRouter = require('./router/mainRouter')

mongoose.connect(process.env.MONGO_KEY)
    .then( () => {
        console.log('Connection was succesful')
    })
    .catch((e) => {
        console.log(e)
        console.log('Error while connecting to db')
    })

const mainRouter = require('./schemas/userSchema')

// function createUser() {
//
//     const user = new userDb
//     user.email = "kitaskitas@gmail.com"
//     user.profileImage = "http:/kazkaskazkas"
//     user.password = "8888888"
//     user.save().then(() => {
//         console.log('USER SAVED')
//     }).catch(e => {
//         console.log(e)
//         console.log('ERROR ON SAVING USER')
//     })
// }
//
// createUser()

app.listen(3000)
app.use(cors())
app.use(express.json())

app.use('/', mainRouter)