const express = require('express')
const parser = require('body-parser')
// const mon = require('mongoose')
const imgRoute = require('./routes/image')

const app = express()

app.use(parser.json())

app.use(express.static('public'))
//Input routes here
app.use(imgRoute)


app.listen(3001, () => console.log('Listening on port 3001!'))