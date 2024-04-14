const jwt=require("jsonwebtoken")
const User=require("../models/usermodel")



const authjwtverify = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '').trim()
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized - Token not provided' });
    }

    const decoded = jwt.verify(token, process.env.SECRETJWT);
    req.user = decoded;
    next();
  } catch (error) {
    console.error(error);
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Unauthorized - Token has expired' });
    }

    return res.status(401).json({ message: 'Unauthorized - Invalid token' });
  }
};
const isAdmin = async (req, res, next) => {
    try {
      const user = await User.findById(req.user._id)
      if (user.isAdmin !== true) {
        res.status(404).json({
          message: "unAuthorized Access"
        })
      }
      else {
        next()
      }
    } catch (error) {
      console.log(error)
    }
  }

  module.exports={authjwtverify,isAdmin}