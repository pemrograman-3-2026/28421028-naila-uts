import express from "express"
import { create, deleteTransaction, GetAlltransaction, getTransactionByID, updateTransaction } from "../controllers/transaction.controller.js"

const router = express.Router()
router.post('/create', create)
router.get('/get-all', GetAlltransaction)
router.get('/get/:id/', getTransactionByID)
router.put('/update/:id', updateTransaction)
router.delete('/delete/:id', deleteTransaction)

export default router
