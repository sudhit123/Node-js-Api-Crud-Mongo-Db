const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    city: String,
    age: Number
})

module.exports = mongoose.model('user', userSchema) 