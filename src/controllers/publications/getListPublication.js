const selectAllPublicationQuery = require('../../models/publicationsQuery/selectAllPublicationQuery');

const getListPublication = async (req, res, next) => {
  try {
    const { keyword, date } = req.query;

    // Dado que la propiedad user puede no existir lo indicamos por medio de la interrogación.
    const publications = await selectAllPublicationQuery(
      keyword,
      date,
      req.user?.id
    );

    res.send({
      status: 'ok',
      data: {
        publications,
      },
    });
  } catch (err) {
    next(err);
  }
};
module.exports = getListPublication;
