const mongoose = require('mongoose')
const Schema = require(mongoose.Schema);

const db = require("../db/mongodb")
db.dbConnection();

const librarySchema = new Schema({
    "name" : 
    {
        type:String,
        required: [true, "please enter the Name of the Book"]
    },
    "age" : Number,
    "phone" : Number,
    "email" : String,
    "topic" : {
        type : String,
        enum : ["HTML", "CSS", "JavaScript"]
    },
    "createDate" : {
        type : Date,
        default : Date.now()
    }
})

const libraryModel = new mongoose.Model("Library", librarySchema)

module.exports = libraryModel