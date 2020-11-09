const express = require('express'); 
var mongoose  = require("mongoose");
var Menu = require("./models/menu"); 
var bodyParser = require('body-parser');
var app = express(); 
app.set("view engine", "ejs");
app.use(express.static("public"));
const port = 3000

mongoose.connect("mongodb+srv://mayank:Welcome@01@cluster0.64os8.mongodb.net/crispyntasty?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true } ,  function (err){
    if (err)
    console.log("error changed  connecting to database  ", err);
    else
    console.log("Database connected !!! ")

});


app.get("/", function(req, res) {

    // var menuItem = {
    //     Item: "hello", 
    //     Price: "25", 
    //     category: "Drinks"

    // }

    // Menu.create(menuItem, function(err, createdItem){
    //     console.log(err); 
    //     res.render("home"); 

    // })
    
    Menu.find({}, function(err, allItems){
        if(err){
            console.log(err);
        } else {
          console.log(JSON.stringify(allItems)); 
        Menu.find().distinct('cat', function(err, vals){
            res.render("home", {
                items : allItems, 
                catVal: vals
            });
        })
          
        }
    });

   
}); 

app.listen(process.env.PORT || 3000, function (err){
    console.log('server started on port 3000');

})