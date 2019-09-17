const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let companySchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Company', companySchema);