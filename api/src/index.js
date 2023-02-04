const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()


const app = express()
app.use(cors({
    origin: 'http://localhost:3000'
}))


// settings
app.set('port', process.env.PORT || 3001)
app.set('json spaces', 2)


// Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())


// Routes
app.use(require('../routes/register.js'))
app.use(require('../routes/login.js'))
app.use(require('../routes/verifyToken.js'))
app.use(require('../routes/contact.js'))

// Mongo DB configuration
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log('Connected to MongoDB')
    })
    .catch((err)=>console.error(err))


// Starting the server
app.use(cors())
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`)
})