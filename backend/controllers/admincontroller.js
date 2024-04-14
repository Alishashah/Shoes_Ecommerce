const Admin=require("../models/adminmodel")
const Apiresponse = require("../utils/Apiresponse")
const ExpressError = require("../utils/ExpressError")
const WrapAsync = require("../utils/WrapAsync")
const jwt=require("jsonwebtoken")

const generateaccessandrefreshtoken=async(adminId)=>{
try {
    const admin= await Admin.findById(adminId)
   const adminaccesstoken= admin.generatetoken()
   const adminrefreshtoken= admin.refreshaccesstoken()

   admin.refreshtoken=adminrefreshtoken
   await admin.save({validateBeforeSave:false})

   return(adminaccesstoken,adminrefreshtoken)

} catch (error) {
  res.status(500).json({
    message:"Internal server error",
    error:error
  })
}
}
const admincontroller={
    registeradmin:WrapAsync(async(req,res)=>{
        const{adminname,email,password}=req.body
        console.log(req.body)
       if([adminname,email,password].some((field)=>field?.trim()==="")){
        throw new ExpressError(400,"All things are required")
       }
       const adminexisted = await Admin.findOne({
        $or:[{adminname},{email}]
       })

       if(adminexisted){
        throw new ExpressError(409,"Admin already exist")
       }

       const admincreate= await Admin.create({
        adminname,
        email,
        password
       })

       const oneadmin= await Admin.findById(admincreate._id).select("-password")
       return  res.status(201).json(new Apiresponse(201,oneadmin,"admin registersuccessfully"))

    }),

    loginadmin:WrapAsync(async(req,res)=>{
const{email,password}=req.body

if([email,password].some((e)=>e?.trim==="")){
    return res.status(400).json({
        message:"All things are necessary"
    })
}

const existuser= await Admin.findOne({email})
if(!existuser){
    return res.status(400).json({
        message:"user not found"
    })
}

const matchpassword= await existuser.isPasswordcorrect(password)


if(!matchpassword){
    return res.status(400).json({
        message:"invalid password"
    })
}

const admintoken= jwt.sign({_id:existuser._id},process.env.GENERATE_TOKEN,{expiresIn:process.env.EXPIRE_TOKEN})
const admindata= await Admin.findById(existuser._id).select("-password")
// const options={
//     httpOnly:true,
//     secure:true
// }

return res.status(200).json({
 admin:admindata,admintoken,
 message:"admin login successfull"

})

// const{adminaccesstoken,adminrefreshtoken}=await generateaccessandrefreshtoken(existuser._id)

// const loggedinadmin=await Admin.findById(existuser._id).select("-password refreshtoken")

// const options={
//     httpOnly:true,
//     secure:true
// }

// res.status(200)
// .cookie("accesstoken",adminaccesstoken,options)
// .cookie("refreshtoken",adminrefreshtoken,options)
// .json({
//     admincredentials :loggedinadmin,adminaccesstoken,adminrefreshtoken
// })


}),

logoutadmin:async(req,res)=>{
 req.admin._id
}

}
module.exports=admincontroller