const joi = require('joi');
const joiErrorMessages = require('../joiErrorMessages');

const editPersonalInfoSchema = joi.object({
    personalInfo: joi.string().max(250).messages(joiErrorMessages),
});

module.exports = editPersonalInfoSchema;
