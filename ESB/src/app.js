/**
 *  Estándar de código utilizado: JavaScript Standard Style
 */

const express = require('express')
const app = express()

// Dependencias utilizadas
const morgan = require('morgan')
const bodyParser = require('body-parser')

// routes
const routes = require('./routes/Comunicacion')

// middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(routes)

// puerto del API
app.listen(3040)
