const usermodel = require("../models/usermodel");
const cartmodel = require("../models/cartmodel");
const WrapAsync = require("../utils/WrapAsync");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const uploadOnCloudinary = require("../utils/multerimage");

const usercontroller = {
  userRegister: WrapAsync(async (req, res) => {
    try {
      const { username, email, password, phone, secretkey } = req.body;
      const image = req.file?.path;

      console.log(req.body);

      if (!(username && email && password && phone && secretkey)) {
        return res.status(400).json({
          message: "ALL DATA IS REQUIRED",
        });
      }
      const existUser = await usermodel.findOne({ email: email });
      if (existUser) {
        return res.status(400).json({
          message: "User already exists",
        });
      }

      const hashPassword = await bcrypt.hash(password, 10);

      if (!image) {
        return res.status(400).json({
          message: "image is required",
        });
      }

      const imagedata = await uploadOnCloudinary(image);
      if (!imagedata) {
        return res.status(400).json({
          message: "imagedata is required",
        });
      }
      const userdata = await usermodel.create({
        username: username,
        email: email,
        password: hashPassword,
        phone: phone,
        secretkey: secretkey,
        image: imagedata.url,
      })

      // userdata.image=req.file?.path
      console.log(userdata);



      const dataimage = await userdata.save();

      return res.status(201).json({
        data: dataimage,
        message: "user data saved",
      });
    } catch (error) {
      return res.status(500).json({
        message: "internal server error",
        error: error.message,
      });
    }
  }),

  getuserRegisterdata: WrapAsync(async (req, res) => {
    try {
      const userInfo = await usermodel.find({});
      res.json({
        data: userInfo,
        message: "Data fetched",
      });
    } catch (error) {
      console.error("Error in getuserRegisterdata:", error);
      res.status(500).json({
        message: "Internal server error",
      });
    }
  }),

  deleteuser:WrapAsync(async(req,res)=>{
    const {id}=req.params
    const dlete=await usermodel.findByIdAndDelete(id)

    return res.status(200).json({
      message:"delete usersuccess full",
      dlete:dlete
    })
  }),

  updateuser:WrapAsync(async(req,res)=>{
    const updated=req.body
    const updatedata=await usermodel.findByIdAndUpdate(updated._id,{updated},{ new: true })
    console.log(updated)

    return res.status(200).json({
      message:"updated successfully",
      updatedata:updatedata
    })
  }),

  loginuser: WrapAsync(async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await usermodel.findOne({ email });
      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({
          message: "Invalid credentials",
        });
      }

      const jwttoken = jwt.sign({ _id: user._id,
                                  username:user.username
      }, process.env.SECRETJWT, {
        expiresIn: "7d",
      });

      res.json({
        message: "Login successful",
        user: {
          name: user.username,
          email: user.email,
          address: user.address,
          phone: user.phone,
          userId: user._id.toString(),
          image: user.image,
        },
        jwttoken,
      });
    } catch (error) {
      console.error("Error in loginuser:", error);
      res.status(500).json({
        message: "Internal server error",
      });
    }
  }),
  forgotpassword: WrapAsync(async (req, res) => {
    try {
      const { email, secretkey, newpassword } = req.body;
      if (!email) {
        return res.status(400).json({
          message: "email required",
        });
      }
      if (!secretkey) {
        return res.status(400).json({
          message: "secretkey required",
        });
      }
      if (!newpassword) {
        return res.status(400).json({
          message: "newpassword required",
        });
      }

      // check exist or not

      const existuser = await usermodel.findOne({ email, secretkey });

      if (!existuser) {
        res.status(400).json({
          message: "invalid user",
        });
      }
      const newpasswordgenerated = await bcrypt.hash(newpassword, 10);
      const updatedpassword = await usermodel.findByIdAndUpdate(existuser._id, {
        password: newpasswordgenerated,
      },{new:true});

      res.status(200).json({
        updatedpassword,
        message: "password updated successfully",
      });
    } catch (error) {
      res.status(500).json({
        message: "password not updated successfully",
      });
    }
  }),
  displayCart: WrapAsync(async (req, res) => {
    const cart = await cartmodel.findById({ userId: req.user.id });
    if(!cart){
      res.status(401).send({message:"No Cart Found!"})
    }
    res.status(200).send({message:"Success",cartData:cart})
  }),
};

module.exports = usercontroller;
