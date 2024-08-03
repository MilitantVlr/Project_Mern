const libraryModel = require("../models/libraryModel")
const librarySchema = require("../models/libraryModel")

async function getAllBooks(req, res) {
    let books = await libraryModel.find()
    if(books.length() >= 1){
        res.status(200).json({
            "data" : "",
            "msg" :  books ,
            "error" : ""
        })
    }else{
        res.status(202).json({
            "data" : "",
            "msg" : "There are no books to display" ,
            "error" : ""
        })
    }
}

async function getSpecificBook(req,res) {
    try {
        let results = await libraryModel.find({"name" : req.query.name})
        if(results.length() >= 1){
            res.status(200).json({
                "data" : "",
                "msg" :  results ,
                "error" : ""
            })
        }else{
            res.status(202).json({
                "data" : "",
                "msg" : "There are no books to display" ,
                "error" : ""
            })
        }
    }catch(err) {
        res.status(500).json({
            "data" : "",
            "msg" : "" ,
            "error" : err.message
        })
    }
}

async function createBooks(req, res) {
    try {
        const book = new libraryModel(req.body)
        await trainee.save()
        res.status(201).json({
            "data" : "",
            "msg" : "Book created successfully!" ,
            "error" : ""
        })
    }catch(err) {
        res.status(500).json({
            "data" : "",
            "msg" : "" ,
            "error" : err.message
        })
    }
}

function updateBooks(req, res) {
    res.send(req.body)
}

function deleteBooks(req, res) {
    res.send(req.params.name)
}

module.exports = {
    getAllBooks, getSpecificBook, createBooks, updateBooks, deleteBooks
}