const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/olympics").then(()=>{
    console.log("connection successful");
}).catch((err) =>{
    console.log("No connection");
})