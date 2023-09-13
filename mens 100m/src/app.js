const express = require("express");
require("./database/connection");
const MensRanking = require("./models/mens");
const router = require("./router/men")
const app = express();
const port = process.env.PORT || 7000;//"process.env.PORT" will assign 
//the port dynamically so that we could host this app later or bydefault
//its port no. is 3000

//To get the JSON data coming from POSTMAN, we would have to use 
//express.json() so that req.body me get that data
app.use(express.json());
app.use(router);

app.listen(port, () =>{
    console.log(`connection is live at the port no. ${port}`)
})