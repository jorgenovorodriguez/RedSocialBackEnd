const insertLikeQuery = require('../../models/publicationsQuery/insertLikeQuery');

const newLike = async (req, res, next) => {
  try {
    // Obtenemos por destructuring el path param tweetId.
    const { publicationId } = req.params;

    await insertLikeQuery(publicationId, req.user.id); //Poner emoji

    res.send({
      status: 'ok',
      message: 'Like agregado',
    });
  } catch (err) {
    next(err);
  }
};

module.exports = newLike;
