const Joi=require("joi")
const ExpressError = require("../utils/ExpressError")

const uservalidation=Joi.object({
    username:Joi.string().required(),
    email:Joi.string().required(),
    password:Joi.string().pattern(new RegExp('^[a-z A-Z 0-9]{3,30}$'))
}).required()


const validateuser=(req,res,next)=>{
    let {error}=uservalidation.validate(req.body)
    let errormsg=error.details.map((err)=>err.message).join(",")
    if(error){
        throw new ExpressError(401,errormsg)
    }else{
        return next()
    }
}

module.exports=validateuser