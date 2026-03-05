import multer from "multer"      // multer is used to upload files in local storage


// We are using diskStorage not memoryStorage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp")
  },
  filename: function (req, file, cb) {
    //you can avoid this. It is to append unique code to your file name
    // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    // cb(null, file.fieldname + '-' + uniqueSuffix)
    cb(null, file.originalname) // we will save it by the original name because it is temporary, we will unlink it after uploading on cloudinary
  }
})

const upload = multer({ storage,})