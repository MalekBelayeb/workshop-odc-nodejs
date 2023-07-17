const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select:false
    },
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    role: {
        type: String,
        enum: ["user", "admin", "manager"],
        default: "user"
    }

})


module.exports = mongoose.model("User", userSchema)