const express = require('express')
// const data = require('..data/greetingsData')
const greetingsRoute = express.Router()


greetingsRoute.get('/', (req, res) =>{
res.status(200).json({message: "Hello, Stranger"})
})
greetingsRoute.get('/:name',(req, res )=> {
let name = (req.params.name)    
res.status(200).json({greet: `Whats up, ${name}! It's so nice to see you!`})    
})



module.exports = greetingsRoute