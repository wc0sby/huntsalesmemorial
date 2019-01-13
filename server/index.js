const express = require('express')
const parser = require('body-parser')
// const mon = require('mongoose')

const app = express()

app.use(parser.json())

app.use(express.static('public'))
//Input routes here


app.listen(3001, () => console.log('Listening on port 3001!'))