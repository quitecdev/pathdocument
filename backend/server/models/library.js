const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let librarySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    //Creo refereincia a Company
    company: { type: Schema.ObjectId, ref: 'Company' }
});

module.exports = mongoose.model('Library', librarySchema);