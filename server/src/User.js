const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    user_id:String,
    email:String,
    family_name:String,
    given_name:String,
    followers:Array,
    following:Array,
})

var PostSchema = new mongoose.Schema({
    uri:String,
    title: String,
    description: String,
    user_id: String,
  });

mongoose.model("User", UserSchema)
mongoose.model("Post", PostSchema)