const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('./User')

app.use(bodyParser.json())

const User = mongoose.model("user")
const mongoUri = 'mongodb+srv://admin-des:akglubLnTcG5WSEp@social-leaf-cluster.cb4sl.mongodb.net/user_info?retryWrites=true&w=majority'

mongoose.connect(mongoUri,{
    useNewUrlParser:true,
    useUnifiedTopology: true
})

mongoose.connection.on("connected",() =>{
    console.log("connected to mongo")
})
mongoose.connection.on("error",(err) =>{
    console.log("error", err)
})
app.get('/', (req,res) => {
    res.send("welcome to node js")
})

app.post('/send', (req, res)=>{
    console.log(req.body)
    res.send("posted")
})

app.listen(3000, () => {
    console.log("server running")
})