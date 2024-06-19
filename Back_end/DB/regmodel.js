const mongoose = require("mongoose");

const userschema = mongoose.Schema({
    name:{type:String},
    mail:{type:String},
    mobile:{type:Number},
    username:{type:String},
    password:{type:String},
    cpassword:{type:String}
});

const model = mongoose.model("Users",userschema);

module.exports = model;