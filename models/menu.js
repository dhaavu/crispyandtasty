var mongoose = require("mongoose"); 

var menuSchema = new mongoose.Schema({
    Item: String, 
    Price: String, 
    cat: String
}); 

module.exports = mongoose.model("menu", menuSchema); 