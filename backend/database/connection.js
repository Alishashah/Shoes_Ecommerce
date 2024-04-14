const mongoose=require("mongoose")
require("dotenv").config()
const MONGOATLAS_DB=process.env.MONGOATLAS_DB

const database= async()=>{
    await mongoose.connect(MONGOATLAS_DB)
}
module.exports=database