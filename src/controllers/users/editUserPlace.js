const selectUsersByIdQuery = require('../../models/usersQuery/selectUserByIdQuery');
const updateUserPlaceQuery = require('../../models/usersQuery/updateUserPlaceQuery');
const { generateError } = require('../../services/errors');

const editUserPlace = async (req, res, next) => {
    try {
        const { place } = req.body;

        if (!place) {
            generateError('Faltan campos', 400);
        }

        const user = await selectUsersByIdQuery(req.user.id);

        await updateUserPlaceQuery(place, req.user.id);
    } catch (err) {
        next(err);
    }
};

module.exports = editUserPlace;
