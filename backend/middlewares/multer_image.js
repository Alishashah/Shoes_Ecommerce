const multer = require("multer")
const path=require("path")
//
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,path.join(__dirname, "../uploads"))
},
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  // file.fieldname+"-"+ Date.now()+ path.extname()
   const upload = multer({
    storage: storage
})
module.exports = upload