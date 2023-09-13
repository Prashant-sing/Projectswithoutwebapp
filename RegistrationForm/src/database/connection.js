const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/RegistrationForm").then(()=>{
    console.log("Connection hoye gao");
}).catch((err)=>{
    console.log("Connection nhi hua beta chaman");
})