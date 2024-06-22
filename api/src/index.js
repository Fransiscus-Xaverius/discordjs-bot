const express = require("express") // import express
const mongoose = require("mongoose") // import mongoose
require("dotenv").config() //import values from .env

const app = express() //initialize express app
 
const PORT = process.env.PORT || 3000 //set api port

app.get("/", (req, res) => res.send("Hello! this is the Discord.js bot API.")) //testing endpoint

if (!process.env.MONGODB_URI ) {
    console.log("MONGO_URI not found") //make sure mongo_uri is defined in .env
}

mongoose.connect(process.env.MONGODB_URI).then(() => { //connect to mongodb
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`)) //start api and listen on port
})
