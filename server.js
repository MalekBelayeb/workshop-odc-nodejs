const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
require("./db")

const bodyParser = require("body-parser")

const app = express()

const userRoute = require('./route/user-route')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', userRoute)
app.listen(process.env.PORT, (err) => {

    if (err) {
        console.log('error listening to server')
    } else {
        console.log("listening to port 3001")
    }
})

app.get("/", (req, res) => {

    res.status(200).send({ success: true, message: "welcome to odc" })

})











