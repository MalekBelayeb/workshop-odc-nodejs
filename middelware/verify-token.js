const jwt = require('jsonwebtoken')


const verifyToken = (req, res, next) => {

    //read header 
    const header = req.headers["authorization"]
    //split the token from bearer  
    let token = header.split("Bearer ")[1]
    console.log(token)
    //verify token
    jwt.verify(token, 'secretKey', (err, decoded) => {

        if (err) return res.status(403).send({ success: true, message: "Session expired" })
        req.idUser = decoded.iduser
        console.log(decoded)
        next()
    })
}

module.exports = verifyToken