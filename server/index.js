const express = require('express')
const parser = require('body-parser')
// const mon = require('mongoose')

const app = express()

app.use(parser.json())

app.use(express.static('public'))
//Input routes here
app.get("/",(req,res)=>{
  res.render('/index')
})

app.listen(process.env.PORT || 3001, () => console.log('Listening on port 3001!'))