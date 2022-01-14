const express = require('express')
const tipRoute = express.Router()

tipRoute.get('/', (req, res) =>{
res.status(200).json({message: "Get those tips!"})
})

tipRoute.get('/:tip/:total/:tipPercentage', (req, res) =>{
let tip = Number(req.params.tip)
res.status(200).json({tips: 'tip % tipPercentage'})
})

module.exports = tipRoute

