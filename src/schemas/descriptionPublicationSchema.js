const joi = require('joi');

const descriptionPublicationSchema = joi.object().keys({
    description: joi.string().max(200),
})

module.exports = descriptionPublicationSchema;