const express = require('express')
var app = express(); 
app.set("view engine", "ejs");
app.use(express.static("public"));
const port = 3000

app.get("/", function(req, res) {
    res.render("home"); 
}); 

app.listen(port, () => console.log(`Example app listening on port port!`))