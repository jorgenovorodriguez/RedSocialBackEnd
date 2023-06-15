const insertPublicationQuery = require('../../models/publicationsQuery/insertPublicationQuery');
const savePhoto = require('../../services/savePhoto');
const { titlePublicationSchema, placePublicationSchema, descriptionPublicationSchema } = require('../../schemas/index');

const { generateError } = require('../../services/errors');

const newPublication = async (req, res, next) => {
  try {
    const { title, place, description } = req.body;

    if (!title || !place || !description || !req.files?.photo) {
      generateError('Faltan campos', 400);
    }

    await titlePublicationSchema.validateAsync({ title });
    await placePublicationSchema.validateAsync({ place });
    await descriptionPublicationSchema.validateAsync({ description });

    const photoFile = await savePhoto(req.files.photo, 500);

    // Insertamos la entrada y obtenemos los datos de la misma.
    const publication = await insertPublicationQuery(
      title,
      photoFile,
      place,
      description,
      req.user.id
    );

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

module.exports = newPublication;
