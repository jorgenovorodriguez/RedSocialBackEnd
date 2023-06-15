const joi = require('joi');

const placePublicationSchema = joi.object().keys({
    place: joi.string().min(1).max(100),
})

module.exports = placePublicationSchema;