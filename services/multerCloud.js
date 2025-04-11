import multer from 'multer'
import { allowedExtensions } from '../utilities/allowedExtentions.js';

export const multerCloudFunction = (allowedExtensionsArr) => {
  if (!allowedExtensionsArr) {
    allowedExtensionsArr = allowedExtensions.Image
  }
  //================================== Storage =============================
  const storage = multer.memoryStorage();  // Use memory storage to handle file buffer directly

  //================================== File Filter =============================
  const fileFilter = function (req, file, cb) {
    if (allowedExtensionsArr.includes(file.mimetype)) {
        console.log(file);
        
      return cb(null, true)
    }
    cb(new Error('invalid extension', { cause: 400 }), false)
  }

  const fileUpload = multer({
    fileFilter,
    storage,
    limits: { fileSize: 50 * 1024 * 1024 }, // **50MB file size limit**

  })
  return fileUpload
}