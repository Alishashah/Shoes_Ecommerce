const Categorymodel=require("../models/categorymodel")

const wrapasync=require("../utils/WrapAsync")
const categorycontroller={

    createcategory: wrapasync(async (req, res) => {
        try {
            const { categoryname } = req.body;

            if (!categoryname) {
                return res.status(400).send({
                    success: false,
                    message: "Category name is required",
                });
            }

            const existingCategory = await Categorymodel.findOne({ categoryname });

            if (existingCategory) {
                return res.status(200).send({
                    success: false,
                    message: "Category already exists",
                });
            }

            const categoryData = await Categorymodel.create({ categoryname });
            const savedCategory = await categoryData.save();

            return res.status(201).send({
                success: true,
                category: savedCategory,
                message: "Category created successfully",
            });
        } catch (error) {
            console.error("Error in creating category:", error);
            return res.status(500).send({
                success: false,
                message: "Error in category creation",
            });
        }
    }),


    updatecategory: wrapasync(async (req, res) => {
        const categorydata = req.body;

        try {
          const category = await Categorymodel.findByIdAndUpdate(
            categorydata._id,
            categorydata, // Update directly with categorydata
            { new: true }
          );

          if (!category) {
            return res.status(404).send({
              success: false,
              message: "Category not found",
            });
          }

          console.log(category);
          res.status(200).send({
            success: true,
            message: "Category updated successfully",
            category,
          });
        } catch (error) {
          console.error("Error updating category:", error);
          res.status(500).send({
            success: false,
            message: "Internal server error",
          });
        }
      }),
    getallcategory:async(req,res)=>{
     const alldata= await Categorymodel.find({})
     res.status(200).send({
        alldata:alldata,
        message:"all category data"
     })
    },

   singlecategorydata:async(req,res)=>{
   const single= await Categorymodel.findById(req.params.id)
   res.status(200).send({
    single,
    message:"single category"
   })
    },

    deletecategory:wrapasync(async(req,res)=>{
        const{id}=req.params
    const deletedata= await Categorymodel.findByIdAndDelete(id)

    res.status(200).json({
        deletedata,
        message:"category deleted successfully"
    })
    })

}
module.exports=categorycontroller