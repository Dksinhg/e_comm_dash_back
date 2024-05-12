const mongoose = require('mongoose')

// Schema 

const productSchema = new mongoose.Schema({
   name:  String,
   email: String,
   password:String
});

// collection 
const userdata = mongoose.model("users", productSchema)

module.exports = userdata;