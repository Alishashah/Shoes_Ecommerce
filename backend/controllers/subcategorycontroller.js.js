const SubCategory=require("../models/subcategory")

const subcategorycontroller={
    createsubcategory:async(req,res)=>{
       const  {categoryname,category}=req.body

        if(!categoryname&& !category){
            return res.status(400).json({
                message:"subcategory & category is required"
            })
        }

        const Createsubcategory= await SubCategory.create({
            categoryname:categoryname,
            category:category
        })

        const savecategory= await Createsubcategory.save()

        return res.status(200).json({
            message:"subcategory is created",
            savecategory:savecategory
        })
    },

    singlecategory:async(req,res)=>{


    }
}

module.exports=subcategorycontroller