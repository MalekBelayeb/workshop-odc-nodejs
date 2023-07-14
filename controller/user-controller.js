const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const User = require('../model/user-model')

const login = async (req, res) => {

    try {
        //let user = awai user.findOne()
        let { email, password } = req.body
        let userExist = await User.findOne({ email })
        if (!userExist) return res.status(404).send({ success: true, message: "email not exist" })


        if (await bcrypt.compare(password, userExist.password)) {

            delete userExist._doc.password

            let token = jwt.sign({ iduser: userExist._id }, "secretKey")

            return res.status(200).send({ success: true, message: "login user", token, user: userExist })

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
        const hashPass = await bcrypt.hash(user.password, 10)
        user.password = hashPass

        let newUser = await user.save()

        delete newUser._doc.password

        return res.status(200).send({ success: true, message: "register user", user: newUser })

    } catch (err) {

        console.log(err)
        return res.status(404).send({ success: true, message: err })

    }



}

const getUsers = async (req, res)  => {

    try {
        console.log(req.idUser)
        //get all users 
        let users = await User.find()
        res.status(200).send ( {

            success : true,
            users

        }


        )

        
        
    } catch (error) {
        console.log(error)
        res.status(404).send({
          
            success : false,
            error 

        })
    }


    



} 

module.exports = { login, register,getUsers}
