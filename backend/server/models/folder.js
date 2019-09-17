const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let folderSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    //Creo refereincia a Company
    library: { type: Schema.ObjectId, ref: 'Library' }
});

module.exports = mongoose.model('Folder', folderSchema);