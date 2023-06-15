const emailUserSchema = require('./emailUserSchema');
const nameUserSchema = require('./nameUserSchema');
const passwordUserSchema = require('./passwordUserSchema');
const personalInfoSchema = require('./personalInfoSchema');
const newPasswordUserSchema = require('./newPassUserSchema');
const textCommentSchema = require('./textCommentSchema');
const titlePublicationSchema = require('./titlePublicationSchema');
const placePublicationSchema = require('./placePublicationsSchema');
const descriptionPublicationSchema = require('./descriptionPublicationSchema');

module.exports = {
    emailUserSchema,
    nameUserSchema,
    passwordUserSchema,
    personalInfoSchema,
    newPasswordUserSchema,
    textCommentSchema,
    titlePublicationSchema,
    placePublicationSchema,
    descriptionPublicationSchema,
}