const express = require('express')

const app = express()

const port = 3000

app.use(express.urlencoded({extended: true}))

const libraryRoutes = require('./routes/libraryRoutes')

app.use("/api/v1/library", libraryRoutes)

app.use("/*", () => {
    console.log("No Routes matcher the request")
})

app.listen(port, () => console.log("Server is listening to port" + port))