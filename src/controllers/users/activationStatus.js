const activationStatusQuery = require("../../models/usersQuery/activationStatusQuery");

const activationStatus = async (req, res, next) => {
    const { email } = req.body;
    console.log(email);
    try {
        await activationStatusQuery(email);

        res.send({
            status: "ok",
            message: "Usuario activado",
        });

    } catch (err) {
        next(err);
    }
};

module.exports = activationStatus;