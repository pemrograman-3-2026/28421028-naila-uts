import { prisma } from "../lib/prisma.js"

export const create = async (req, res) => {
    const body = req.body 

        await prisma.payment.create({
            data : {
                status: body.status,
                customerID: body.customerID,
                productID: body.productID,
                transactionID: body.transactionID
            }
        })

        res.json ({
            message: 'payment created succcesfully'
        })

    }