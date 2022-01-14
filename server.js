const express = require('express')
const bodyParser = require('body-parser')

const port = 8888
const app = express ()

const greetingsRoute = require("./routes/greetingsRoute")
const tipRoute = require('./routes/tipRoute')
const magicEightRoute = require('./routes/magicEightRoute')


app.use(bodyParser.json())
app.use('/greet', greetingsRoute)
app.use('/tip', tipRoute)
app.use('/magic', magicEightRoute)

app.get('/', (req, res) =>{
res.status(200).json({message: "API UP!"})
})

app.listen(port, () => {
console.log ("Server Is Listening")
});

