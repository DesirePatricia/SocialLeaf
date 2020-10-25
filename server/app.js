const express = require('express')
const { ApolloServer} = require('apollo-server');
const {PORT = 3000} = process.env
const mongoose = require('mongoose')
const { MongoDataSource } = require('apollo-datasource-mongodb')
const { MongoClient } = require ('mongodb')
const client = new MongoClient('mongodb://localhost:27017/test')
const typeDefs = require('./src/typeDefs')
const resolvers = require('./src/resolvers')
client.connect()
require('./src/User')
require('dotenv').config();


class Users extends MongoDataSource {
    getUser(user_id) {
      return this.findOneById(user_id)
    }
  }
  
  class Posts extends MongoDataSource {
    getPost(uri) {
      return this.findOneById(uri)
    }
  }
  


const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        users: new Users(db.collection('users')),
        posts: new Posts(db.collection('posts'))
    })
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