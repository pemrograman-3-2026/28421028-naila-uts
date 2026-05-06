import { prisma } from "../lib/prisma.js"

export const create = async (req, res) => {
    const body = req.body 

        await prisma.transaction.create({
            data : {
                amount: body.amount,
                paymentmethod: body.paymentmethod,
                customerID: body.customerID
            
            }
        })

        res.json ({
            message: 'transaction created succcesfully'
        })

    }