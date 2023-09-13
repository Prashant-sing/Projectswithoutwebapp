const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
require("./database/connection");
const port = process.env.PORT || 8000;

const static_path = path.join(__dirname, "../public");
const templates_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");


app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", templates_path);//It will set views as templates_path.
// So, instead of looking for views now it will look for templates_path.
hbs.registerPartials(partials_path);

app.get("/", (req, res) =>{
    res.render("index");
})
app.listen(port, ()=>{
    console.log(`listening at the port no:- ${port}`)
});