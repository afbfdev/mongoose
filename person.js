const mongoose = require('mongoose');

const personSchema = mongoose.Schema({
    name : String,
    age: Number,
    favoriteFoods: [String] 
});

const model = mongoose.model("Person", personSchema);

module.exports = model;