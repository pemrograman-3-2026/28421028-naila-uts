import multer from "multer"
import {Router} from "express"
import { createProduct, deleteProduct, GetAllproduct, updateProduct } from "../controllers/product.controller.js"
import path from "path"


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname)
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + ext)
  }
})

const upload = multer({ storage: storage })

const router = Router()
router.post('/create', upload.single('Image'), createProduct)
router.get('/get-all', GetAllproduct)
router.put('/update/:id', upload.single('Image'), updateProduct)
router.delete('/delete/:id',deleteProduct )

export default router;
