const selectPublicationByIdQuery = require('../../models/publicationsQuery/selectPublicationByIdQuery');

const getPublication = async (req, res, next) => {
    try {
        
        const { publicationId } = req.params;

        const publication = await selectPublicationByIdQuery(publicationId, req.user?.id);

        res.send({
            status: 'ok',
            data: {
                publication,
            },
        });
    } catch (err) {
        next(err);
    }
};

module.exports = getPublication;
