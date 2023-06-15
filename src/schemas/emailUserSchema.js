const joi = require('joi');

const emailUserSchema = joi.object().keys({
    email: joi
        .string()
        .email()
        .required()
        .error((errors) => {
            if (errors[0].code === 'any.required') {
                return new Error('Se requiere un email');
            } else {
                return new Error('El email no es válido');
            }
        }),

})

module.exports = emailUserSchema;