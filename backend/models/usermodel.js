const mongoose =require("mongoose")
const Schema=mongoose.Schema

const userschema=new Schema({

    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    secretkey:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true

    },
    image:{
        type:String
    }

},{timestamps:true})

const User=mongoose.model("User",userschema)

module.exports=User