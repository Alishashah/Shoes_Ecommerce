const ExpressError = require("../utils/ExpressError")
const Joi = require("joi");

const reviewvalidate=Joi.object({

        rating:Joi.number().required().min(1).max(5),
        comment:Joi.string().required(),
        ratingdata:Joi.string().required()

})

const reviewschemavalidate=(req,res,next)=>{
    let {error}=reviewvalidate.validate(req.body)
    if(error){
        let newerr=error.details.map((er)=>er.message).join(",")
        throw new ExpressError(400,newerr)
    }else{
        next()
    }
}
module.exports=reviewschemavalidate
