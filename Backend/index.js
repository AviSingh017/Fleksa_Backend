const express = require("express");
const app = express();
const {connection} = require("./config/db");
const { Route } = require("./routes/fleksa.routes");
require("dotenv").config();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello Fleksa");
});

app.use("/", Route);

app.listen(process.env.port, async()=>{
    try{
        await connection;
        console.log("Connected to DB");
    }
    catch(err){
        console.log(err);
    }
    console.log(`Server running on port ${process.env.port}`);
});