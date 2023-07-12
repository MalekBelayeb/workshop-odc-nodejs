const userController = require('../controller/user-controller')
const router = require("express").Router()

router.post('/v1/user/login', userController.login)
router.post('/v1/user/register', userController.register)

module.exports = router