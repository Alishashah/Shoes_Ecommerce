const handleValidationError=(err)=>{
    console.log("validation error please follow rules")
    console.dir(err.message)
    return err;
}

const MongooseError=(err,req,res,next)=>{
   if(err.name==="ValidationError"){
   err= handleValidationError()
   }next(err)

}
module.exports=MongooseError