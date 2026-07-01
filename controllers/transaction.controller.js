import { prisma } from "../lib/prisma.js"

export const create = async (req, res) => {
    const body = req.body 

        await prisma.transaction.create({
            data : {
                amount: body.amount,
                paymentmethod: body.paymentmethod,
            
            }
        })

        res.json ({
            message: 'transaction created succcesfully'
        })

    }

    export const GetAlltransaction = async (req, res) => {
    const data = await prisma.transaction.findMany({})

    res.json(data)
}

export const getTransactionByID = async (req, res) => {

    const idTransaction = req.params.id

    const data = await prisma.transaction.findUnique({
        where: {
            id: Number (idTransaction)
        }
    })
     res.json(data)
    }

    export const updateTransaction = async (req, res) => {
    const idTransaction = Number (req.params.id)

    await prisma.transaction.update({
        where: {
           id: idTransaction
        },
        data: req.body
    })


    res.json({
        message: 'Data was successfully'
    })
}

export const deleteTransaction = async (req,res) => {
    const idTransaction = Number (req.params.id)

    await prisma.transaction.delete({
        where: {
           id: idTransaction

        }

    })
    res.json({
        message: 'Data was delete'
    })
}
