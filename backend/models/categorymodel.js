const mongoose=require("mongoose")
const Schema=mongoose.Schema

const categoryschema=new Schema({
    categoryname:{
        type:String,
        required:true
    }
    },{timestamps:true})

const Category=mongoose.model("Category",categoryschema)

module.exports=Category