const mongoose =require("mongoose")
const Schema=mongoose.Schema
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")

const adminschema=Schema({
    adminname:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true

    },
    password:{
        type:String,
        trim:true,
        required:true

    },
    // refreshtoken:{
    //     type:String
    // }
})

// passwordhash

adminschema.pre("save", async function(next){
if(!this.isModified("password")) return next()
    this.password= await bcrypt.hash(this.password,10)
next()
})


// password compare
adminschema.methods.isPasswordcorrect= async function(password){
     return await bcrypt.compare(password,this.password)
}

// jwt generatetoken

// adminschema.methods.generatetoken= async function(){
// jwt.sign({
//     _id:this._id,
//     adminname:this.adminname,
//     email:this.email

// },process.env.GENERATE_TOKEN,{expiresIn:process.env.EXPIRE_TOKEN})
// }
// adminschema.methods.refreshaccesstoken= async function(){
// jwt.sign({
//     _id:this._id,
// },process.env.REFRESH_ACCESS_TOKEN,{expiresIn:process.env.REFRESH_ACCESS_EXPIRE})
// }





const Admin=mongoose.model("Admin",adminschema)
module.exports=Admin