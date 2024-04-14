const usercontroller = require("../controllers/usercontroller");
const admincontroller = require("../controllers/admincontroller");
const categorycontroller = require("../controllers/categorycontroller");
const productcontroller = require("../controllers/productcontroller");
const upload = require("../middlewares/multer_image");
const reviewcontroller = require("../controllers/reviewcontroller");
const {authjwtverify} = require("../middlewares/jwtverify");
const adminverifyjwt=require("../middlewares/adminverifyjwt")
const router = require("express").Router();

// User routes
router.post("/signup", upload.single('image'), usercontroller.userRegister);
router.post("/login", usercontroller.loginuser);
router.post("/forgot", usercontroller.forgotpassword);
router.get("/alluserdata", usercontroller.getuserRegisterdata);
router.post("/deleteuser/:id", usercontroller.deleteuser);
router.post("/updateuser/:id", usercontroller.updateuser);

// Admin route
router.post("/adminregister", admincontroller.registeradmin);
router.post("/adminlogin",admincontroller.loginadmin)

// Category routes
router.post("/category", categorycontroller.createcategory);
router.get("/getcategory", categorycontroller.getallcategory);
router.get("/singlecategory/:id", categorycontroller.singlecategorydata);
router.post("/updatecategory/:id", categorycontroller.updatecategory);
router.post("/deletecategory/:id", categorycontroller.deletecategory);

// Product routes
router.post("/createproduct",adminverifyjwt, upload.single('image'), productcontroller.createproduct);
router.post("/updateproduct/:id",adminverifyjwt, productcontroller.updateproduct);
router.get("/getallproduct",  productcontroller.getproduct);
router.delete("/deleteproduct/:id",adminverifyjwt, productcontroller.deleteproduct);
router.get("/singleproduct/:id", productcontroller.singleproduct);
router.get("/searchproduct/:keyword", productcontroller.searchproduct);

// Review routes
router.get("/singleproduct/:id/review",reviewcontroller.getReviewsForProduct)
router.post("/singleproduct/:id/review", authjwtverify, reviewcontroller.createreview);
router.post("/singleproduct/:id/review/:reviewid", authjwtverify, reviewcontroller.deletereview);
router.post("/singleproductupdate/:id/review/:reviewid", authjwtverify, reviewcontroller.updatereview);
module.exports = router;
