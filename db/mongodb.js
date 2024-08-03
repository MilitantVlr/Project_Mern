const mongoose = require('mongoose')

require('dorenv').config()

async function dbConnection() {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("MongoDB is connected successfully")
    } catch (err) {
        console.log(err.message)
    }
}

module.exports = {
    dbConnection
}