

const login = (req, res) => {

    try {

        return res.status(200).send({ success: true, message: "login user" })

    } catch (err) {
        console.log(err)
        return res.status(404).send({ success: true, message: err })

    }

}


const register = (req, res) => {

    try {

        return res.status(200).send({ success: true, message: "register user" })

    } catch (err) {

        console.log(err)
        return res.status(404).send({ success: true, message: err })

    }

}




module.exports = { login, register }