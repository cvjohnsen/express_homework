const express = require('express')
const tipRoute = express.Router()

tipRoute.get('/', (req, res) =>{
res.status(200).json({message: "Hello, Stranger"})
})

tipRoute.get('/:tip', (req, res) =>{
let tip = (req.params.tip)
res.status(200).json({message: "Hello, Stranger"})
})

module.exports = tipRoute