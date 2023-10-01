const mongoose = require('mongoose');
let studentschema = new mongoose.Schema({
    name:String,
    password:Number,
    grid:Number,
    email:String,

})


const schemas = mongoose.model("schemas",studentschema);

module.exports=schemas;