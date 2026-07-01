import { prisma } from "../lib/prisma.js"

export const create = async (req, res) => {
    const body = req.body 

        await prisma.payment.create({
            data : {
                status: body.status,
                productID: Number (body.productID),
                transactionID: Number (body.transactionID)
            }
        })

        res.json ({
            message: 'payment created succcesfully'
        })

    }

    export const GetAllpayment = async (req, res) => {
    const data = await prisma.payment.findMany({})

    res.json(data)
}

export const getPaymentByID = async (req, res) => {

    const idPayment = req.params.id

    const data = await prisma.payment.findUnique({
        where: {
            id: Number (idPayment)
        }
    })
     res.json(data)
    }

    export const updatePayment = async (req, res) => {
    const idPayment = Number (req.params.id)

    await prisma.payment.update({
        where: {
           id: idPayment
        },
        data: req.body
    })

    res.json({
        message: 'Data was successfully'
    })
}

export const deletePayment = async (req,res) => {
    const idPayment = Number (req.params.id)

    await prisma.payment.delete({
        where: {
           id: idPayment

        }

    })
    res.json({
        message: 'Data was delete'
    })
}