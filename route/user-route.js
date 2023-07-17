const userController = require('../controller/user-controller')
const router = require("express").Router()
const verifyToken = require('../middelware/verify-token')
const verifyRole = require("../middelware/verify-role")

router.post('/v1/user/login', userController.login)
router.post('/v1/user/register', userController.register)
router.get('/v1/users', verifyToken, verifyRole(["admin", "manager","user"]), userController.getUsers)

module.exports = router