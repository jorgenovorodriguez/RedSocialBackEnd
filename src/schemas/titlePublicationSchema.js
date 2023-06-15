const joi = require('joi');

const titlePublicationSchema = joi.object().keys({
    title: joi.string().min(1).max(50),
})

module.exports = titlePublicationSchema;