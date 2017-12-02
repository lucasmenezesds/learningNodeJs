const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var PokemonSchema = new Schema({
    number: Number,
    name: String,
    image: String,
    type: Array

});


module.exports = mongoose.model('Pokemon', PokemonSchema);