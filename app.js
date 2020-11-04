const express = require('express')
var app = express(); 
app.set("view engine", "ejs");
app.use(express.static("public"));
const port = 3000

app.get("/", function(req, res) {
    res.render("home"); 
}); 

app.listen(process.env.PORT || 3000, function (err){
    console.log('server started on port 3000');

})