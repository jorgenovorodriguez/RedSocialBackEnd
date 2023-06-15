const joi = require('joi');

const nameUserSchema = joi.object().keys({
    username: joi.string().max(100).required(),
})

module.exports = nameUserSchema;