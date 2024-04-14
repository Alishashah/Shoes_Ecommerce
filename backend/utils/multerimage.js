const cloudinary = require('cloudinary').v2;
const fs = require("fs")
const dotenv = require("dotenv").config()
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

const uploadOnCloudinary = async (localfilepath) => {
    try {
        if (!localfilepath) return null;
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localfilepath,{ resource_type: "auto" })

        //file has been uploaded successfully
        console.log("file is upladed in cloudinary", response.url)
        return response


    }
    catch (error) {
        fs.unlinkSync(localfilepath)//remove the locally saved temporaryt file as the upload operation got failed
        return null
    }
}
module.exports = uploadOnCloudinary