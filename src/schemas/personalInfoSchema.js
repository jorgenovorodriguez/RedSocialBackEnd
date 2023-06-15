const joi = require('joi');

const personalInfoSchema = joi.object().keys({
    personalInfo: joi.string().max(300),
})

module.exports = personalInfoSchema;