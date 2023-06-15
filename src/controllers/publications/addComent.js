const insertComentsQuery = require('../../models/publicationsQuery/insertComentsQuery');
const selectPublicationtByIdQuery = require('../../models/publicationsQuery/selectPublicationByIdQuery');
const { textCommentSchema } = require('../../schemas');
const { generateError } = require('../../services/errors');

const addComent = async (req, res, next) => {
    try {
        const { publicationId } = req.params;

        const { text } = req.body;

        if (!text) {
            generateError('Falta campos por rellenar', 400);
        }

        await textCommentSchema.validateAsync({ text });

        const publication = await selectPublicationtByIdQuery(publicationId, req.user.id);

        const coment = await insertComentsQuery(text, publicationId, req.user.id)

        res.send({
            status: 'ok',
            data: {
                publicationId: +publicationId,
                coment,
            }
        });
    } catch (err) {
        next(err);
    }
};

module.exports = addComent;