const {Schema, model} = require('mongoose')

const userSchema = new Schema({ //User DB Schema for Mongoose
    id:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    avatarHash:{ //this is the hash of the avatar. not every user will have an avatar, so make it defaults to null 
        type: String,
        default: null
    },
}, {timestamps: true});