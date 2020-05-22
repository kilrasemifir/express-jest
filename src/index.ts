import express from 'express'
import bodyParser from 'body-parser'
import { setRouting } from './routing';
import mongoose from 'mongoose'

require('dotenv').config()
const multer = require('multer')

const dbHost = process.env.DB_HOST || "localhost"
const dbPort = process.env.DB_PORT || 27017
const dbName = process.env.DB_NAME || 'demo'

const serverPort = process.env.SERVER_PORT || 80

mongoose.connect(`mongodb://${dbHost}:${dbPort}/${dbName}`,{
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
server.listen(serverPort, ()=>console.log( "Server start" ))