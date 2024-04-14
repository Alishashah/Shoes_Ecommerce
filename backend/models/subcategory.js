const mongoose=require("mongoose")
const Schema=mongoose.Schema

const subcategoryschema=new Schema({
    categoryname:{
        type:String,
        required:true
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    }
    },{timestamps:true})

const SubCategory=mongoose.model("SubCategory",subcategoryschema)

module.exports=SubCategory