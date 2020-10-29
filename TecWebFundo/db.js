var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/TecWebFundo');

var userSchema = new mongoose.Schema({
    username : String,
    email : String,
    password : String

},{collection : 'usercollection'}
);

module.exports={Mongoose:mongoose,UserSchema:userSchema}