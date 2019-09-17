const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;


let rolValidos = {
    values: ["ADMIN_ROLE", "USER_ROLE"],
    message: "{VALUE} no es un rol válido"
}

let usuarioSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: [true, "El password es un campo obligatorio"]
    },
    role: {
        type: String,
        default: 'USER_ROLE',
        enum: rolValidos
    },
    status: {
        type: Boolean,
        default: true
    }
});

usuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe ser único' })

module.exports = mongoose.model('User', usuarioSchema);