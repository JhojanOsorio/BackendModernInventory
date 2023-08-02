
const {Schema, model } = require('mongoose');

const UserSchema = Schema({

     user: {
        type: String,
        required: [true, 'El usuario es obligatorio'], 
        unique: true

    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria'],

    },
    role: {
        type: String,
        required: true,
        emun: ['ADMIN_ROLE', 'USER_ROLE']

    },
    img: {
        type: String,
    
    }
});

UserSchema.methods.toJSON = function(){
    const {__v, password, ...user} = this.toObject();

    return user;
}

module.exports = model('User', UserSchema);

