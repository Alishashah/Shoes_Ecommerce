// const mongoose=require("mongoose")
// const Schema=mongoose.Schema

// const listingSchema=new Schema({
//     image:{
//         type:String,
//         default:"https://media.istockphoto.com/id/1322104312/photo/freedom-chains-that-transform-into-birds-charge-concept.jpg?s=2048x2048&w=is&k=20&c=ZUWO0obdgqfvcSFLGFPJdcLR7Sg6X05fuAxSnAYPtM0=",
//         set:(v)=>
//             v==="" ? "https://media.istockphoto.com/id/1322104312/photo/freedom-chains-that-transform-into-birds-charge-concept.jpg?s=2048x2048&w=is&k=20&c=ZUWO0obdgqfvcSFLGFPJdcLR7Sg6X05fuAxSnAYPtM0=" :v,
//     },
//     price:Number,
//     category:String,
//     slug:String,
//     items_left:Number,
//     brand:String
// })
// const Shoes=mongoose.model("Shoes",listingSchema)
// module.exports=Shoes;