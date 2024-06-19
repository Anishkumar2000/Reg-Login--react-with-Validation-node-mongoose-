const express = require("express");
const app = express();
const router = require("./Router/router");
require("./DB/connections");
const cors = require("cors");
const Port = 7001;

app.use(cors({origin: "http://localhost:3000"}));
app.use(express.json());
app.use("/",router);

app.listen(Port,()=>{
    console.log("App is Running");
});