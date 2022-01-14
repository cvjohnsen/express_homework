const express = require('express')
const tipRoute = express.Router()

tipRoute.get('/', (req, res) =>{
res.status(200).json({message: "Get those tips!"})
})


tipRoute.get('/tip/:total/:tipPercentage', (req, res) =>{
    console.log('Hit')
let total= Number(req.params.total)
let tipPercentage = Number(req.params.tipPercentage)
console.log(total, tipPercentage)
res.status(200).json({tips: `${total} % ${tipPercentage}`})
})

module.exports = tipRoute

