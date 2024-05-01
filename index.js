var express = require('express')
    cors = require('cors')
const PORT = process.env.PORT || 8080 || 5000 || 3000

var mainrouter = require('./main')

var app = express()
app.enable('trust proxy');
app.set("json spaces",2)
app.use(cors())
app.use(express.static("public"))

app.use('/', mainrouter)

app.listen(PORT, () => {
    console.log("Server running on port " + PORT)
})

module.exports = app
