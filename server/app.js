const express = require('express')
const app = express()
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
const {PORT = 3000} = process.env
const mongoose = require('mongoose')
require('./User')
require('dotenv').config();

var schema = buildSchema(`
  type Query {
    hello: String
  }

  type User {
    user_id: String!
    email: String!
    given_name: String
    family_name: String

  }
`);


app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
  }));

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


app.listen(PORT, () => {
    console.log("server running")
})