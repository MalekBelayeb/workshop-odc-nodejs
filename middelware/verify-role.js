const User = require('../model/user-model')

function verifyRole(authorizedRoles) {


    return async (req, res, next) => {


        if (Array.isArray(authorizedRoles)) {
            let iduser = req.idUser

            let user = await User.findById(iduser)

            if (!user) return res.status(404).send({ success: false, message: "user not found" })

            if (!authorizedRoles.includes(user.role)) {
                return res.status(403).send({ success: false, message: "access denied" })
            }

            next()

        }

    }
}



module.exports = verifyRole