import express from 'express'
import bodyParser from 'body-parser'
import { setRouting } from './routing';
import mongoose from 'mongoose'

const multer = require('multer')

mongoose.connect("mongodb://localhost:27017/demo",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})//.then(data=>console.log(data))

const db = mongoose.connection
db.on('error', console.error.bind(console, 'console error'))
db.once('open', ()=>console.log("Mongo start"))

// Creation d'un serveur express
const server = express()

// permet de recuperer les body en json
server.use(bodyParser.json())
//server.use(multer)
// definition des routes
setRouting(server)

// start server
server.listen(8080, ()=>console.log( "Server start" ))