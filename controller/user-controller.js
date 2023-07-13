
const User = require('../model/user-model')

const login = async (req, res) => {

    try {
        //let user = awai user.findOne()
        let { email, password } = req.body
        let userExist = await User.findOne({ email })
        if (!userExist) return res.status(404).send({ success: true, message: "email not exist" })


        if (userExist.password == password) {
            return res.status(200).send({ success: true, message: "login user" })

        }
        else { return res.status(200).send({ success: false, message: "wrong password " }) }

    } catch (err) {
        console.log(err)
        return res.status(404).send({ success: true, message: err })

    }

}

const register = async (req, res) => {

    try {

        let { email, firstname, lastname, password } = req.body

        let userExist = await User.findOne({ email })

        if (userExist) return res.status(404).send({ success: false, message: "email already exists" })

        let user = new User({ email, firstname, lastname, password })

        await user.save()

        return res.status(200).send({ success: true, message: "register user" })

    } catch (err) {

        console.log(err)
        return res.status(404).send({ success: true, message: err })

    }

}

module.exports = { login, register }