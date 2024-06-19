const mongoose = require("mongoose");
require("dotenv").config();


const uri = process.env.Atlas_uri;
mongoose.connect(uri);
const connection = mongoose.connection;
try{
    connection.once("open",()=>{
        console.log("Database Connected");
    });
}
catch{
    console.log("Database Not Connected");
}

