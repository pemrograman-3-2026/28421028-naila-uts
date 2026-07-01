import express from "express"
import { create, deletePayment, GetAllpayment, getPaymentByID, updatePayment } from "../controllers/payment.controller.js"

const router = express.Router()
router.post('/create', create)
router.get('/get-all',GetAllpayment)
router.get('/get/:id/', getPaymentByID)
router.put('/update/:id', updatePayment)
router.delete('/delete/:id', deletePayment)

export default router