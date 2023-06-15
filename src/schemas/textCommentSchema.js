const joi = require('joi');

const textCommentSchema = joi.object().keys({
    personalInfo: joi.string().min(1).max(200),
})

module.exports = textCommentSchema;