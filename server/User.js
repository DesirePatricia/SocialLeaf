const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    user_id:String,
    email:String,
    family_name:String,
    given_name:String,
    followers:Array,
    following:Array
})

mongoose.model("user", UserSchema)