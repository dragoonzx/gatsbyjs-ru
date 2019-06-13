var subdomain = require("express-subdomain")
var express = require("express")
var app = express()

// *** Code examples below go here! ***

app.use(express.static(__dirname + "/public"))
// example.com
app.get("/", function(req, res) {
  res.send("Homepage")
})

var router = express.Router()

//api specific routes
router.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html")
})

router.get("/users", function(req, res) {
  res.json([{ name: "Max" }])
})

app.use(subdomain("gatsby", router))
app.listen(80)
