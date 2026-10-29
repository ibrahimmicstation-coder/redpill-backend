const mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost:27017/practice`) // it create the database

const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String
}) // it control the type and data of document

module.exports = mongoose.model("user", userSchema); 
// Model ko Mongoose aam taur par "users" collection se associate karta hai.