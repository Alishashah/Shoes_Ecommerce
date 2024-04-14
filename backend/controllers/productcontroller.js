const Product= require("../models/productmodel")
const WrapAsync = require("../utils/WrapAsync")
const initdata=require("../initdata/shoes")
const uploadOnCloudinary=require("../utils/multerimage")
const { model } = require("mongoose")
const productcontroller={

    sampledata: async (req, res) => {
        // await Practicedata.deleteMany({})
        await Practicedata.insertMany(initdata.data)
        const dataget = await Practicedata.find({});
        res.json({
          data: dataget,
          messsage: "data get successfully",
        });
        console.log("data was saved");
      },

    createproduct:WrapAsync(async(req,res)=>{
        try {
            const{name,brand,price,description,items_left,quantity,category}=req.body

       const image=req.file?.path
    //    let filename=req.file?.filename
      if (!image) {
        return res.status(400).json({
          message: "Image not provided",
        });
      }
      const imagedata = await uploadOnCloudinary(image);
       const createdata= await Product.create({
        name,
        brand,
        price,
        description,
        items_left,
        quantity,
        category,
        image:imagedata.url,
       })
       console.log(createdata)
       const createdatasave= await createdata.save()

       res.status(200).json({
        productdata:createdatasave,
        message:"product created successfully"
       })

        } catch (error) {
         res.status(500).json("product not created")
         console.log(error)
        }


    }),

    getproduct:WrapAsync(async(req,res)=>{

      try {
        const alldataget=await Product.find({}).populate("category")
        res.status(200).json({
            productdataget:alldataget,
            message:"all product data get"

        })
      } catch (error) {
        res.status(500).json("productdata not get")
      }
    }),

    updateproduct:WrapAsync(async(req,res)=>{
      const updatedataprevious=req.body
        try {
            const updatedata=await Product.findByIdAndUpdate(updatedataprevious._id,{updatedataprevious},{new:true})
            console.log(updatedata)
            res.status(200).json({
                updatedata:updatedata,
                message:" product updated successfully"
            })

        } catch (error) {
            res.status(500).json("product not updated successfully")
        }

    }),

    deleteproduct:WrapAsync(async(req,res)=>{
        try {
            const{id}=req.params
            const deleteddata=await Product.findByIdAndDelete({_id:id})
            res.status(200).json({
                deleteddata:deleteddata,
                message:"product deleted successfully"
            })
        } catch (error) {
            res.status(500).json("productdata not deleted")
        }


    }),

    singleproduct: WrapAsync(async (req, res) => {
      try {
          const { id } = req.params;
          const singledata = await Product.findById(id)
              .populate({
                  path: 'reviews',
                  populate: {
                      path: 'author',
                      model: 'User' // Reference to the User model
                  }
              }).populate("category")
          console.log('Populated singledata:', singledata); // Add this line for logging

          res.status(200).json({
              singledata: singledata,
              message: "single product get"
          });
      } catch (error) {
          console.error('Error fetching single product:', error); // Add this line for error logging

          res.status(500).json({
              message: "single product not get"
          });
      }
  }),

    searchproduct:WrapAsync(async(req,res)=>{
     try {
      const{keyword}=req.params
      const productsearch= await Product.find({
        $or:[{name: { $regex:keyword, $options: 'i' }},{brand:{$regex:keyword,$options:"i"}},{description:{$regex:keyword,$options:"i"}}]
      })
    return res.status(200).json({
      productsearch:productsearch,
      message:"products get"
    })
     } catch (error) {
      return res.status(500).json({

        message:"internal server error"
      })
     }
    })


}

module.exports=productcontroller