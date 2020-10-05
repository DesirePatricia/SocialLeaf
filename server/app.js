const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('./User')

app.use(bodyParser.json())

const User = mongoose.model("user")


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

app.post('/senddata', (req, res)=>{
    const user = new User({
        user_id:req.body.user_id,
        email:req.body.email,
        family_name:req.body.family_name,
        given_name:req.body.given_name,

    })
    res.send("posted")
})

app.listen(3000, () => {
    console.log("server running")
})