const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE','SUPER_ROLE'],
    message: '{VALUE} no es un rol valido'
}
const uniqueValidator = require('mongoose-unique-validator');

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        require: [true, 'El nombre es necesario']
    },
    email: {
        unique: true,
        type: String,
        required: [true,'El correo es necesario']
    },
    password: {
        type: String,
        required: [true, "La constrasena es necesaria"]
    },
    img: {
        type: String
    },
    role: {
        type: String,
        default: 'USER_ROLE',
        enum: rolesValidos
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }

});

usuarioSchema.methods.toJSON = function() {
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;

    return userObject
}
usuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser unico'})

module.exports = mongoose.model('Usuario', usuarioSchema);