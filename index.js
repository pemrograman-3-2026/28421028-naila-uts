import express from 'express'
import UserRoute from './routes/user.route.js'
import ProductRoute from './routes/product.route.js'
import TransactionRoute from './routes/transaction.route.js'
import PaymentRoute from './routes/payment.route.js'
import path from 'path'
import cors from 'cors'

const app = express()
app.use(express.json())

const imagePath = express.static(path.join(process.cwd(), 'uploads'))
app.use('/image', imagePath)

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))

app.get('/', (req, res) => {
    res.send("Helloworld!")
})

app.use('/user', UserRoute)
app.use('/product', ProductRoute)
app.use('/transaction', TransactionRoute)
app.use('/payment', PaymentRoute)

app.listen(3100, () => {
    console.log('server started')
})