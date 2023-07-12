const mongoose = require('mongoose')

const dbUrl = process.env.MONGO_URL

mongoose.connect(dbUrl).then(() => {
    console.log("connected to database")
}).catch((err) => {

    console.log(err)

})