const express = require('express')
const app = express()
const {PORT = 3000} = process.env
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('./User')
require('dotenv').config();

app.use(bodyParser.json())

const User = mongoose.model("user")


mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

mongoose.connection.on("connected",() =>{
    console.log("connected to mongo")
})
mongoose.connection.on("error",(err) =>{
    console.log("error", err)
})
app.get('/', (req,res) => {
    User.find({}).then(data=>{
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})

app.post('/send-data', (req, res)=>{
    const user = new User({
        user_id:req.body.user_id,
        email:req.body.email,
        family_name:req.body.family_name,
        given_name:req.body.given_name

    })
    user.save()
    .then(data=>{
        console.log(data)
        res.send("posted")
    }).catch(err=>{
        console.log(err)
    })
    
})

app.post('/delete',(req,res)=>{
    User.findByIdAndRemove(req.body.id)
    .then(data=>{
        console.log(data)
        res.send("deleted")
    }).catch(err=>{
        console.log(err)
    })
})

app.post('/update', (req, res)=>{
    User.findByIdAndUpdate(req.body.id,{
        user_id:req.body.user_id,
        email:req.body.email,
        family_name:req.body.family_name,
        given_name:req.body.given_name
    })
    .then(data=>{
        console.log(data)
    }).catch(err=>{
        console.log(err)
    })
})

app.listen(PORT, () => {
    console.log("server running")
})