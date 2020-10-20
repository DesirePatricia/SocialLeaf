const express = require('express')
const { ApolloServer, gql } = require('apollo-server');
const {PORT = 3000} = process.env
const mongoose = require('mongoose')
require('./User')
require('dotenv').config();

const typeDefs = gql`
  type Query {
    signedIn: Boolean
    me:[User]
  }

  type User {
    user_id: String!
    email: String!
    given_name: String
    family_name: String
    posts:[Post]

  }
  type Post {
    uri: String
    title: String
    description: String
  }
`;

const server = new ApolloServer({
    typeDefs,
  });



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


server.listen().then(({ url })=> {
    console.log("server running")
})