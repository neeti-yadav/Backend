const { log } = require("console");
const express = require("express");
const app = express();
const path = require("path");


const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine" , "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req,res) => {
    res.render("home.ejs");
});


app.get("/ig/:username", (req,res) => {
    let {username } = req.params;
    const instaDeta = require("./data.json");
    const data = instaDeta[username];
    console.log(data);
    res.render("instagram.ejs", {data});
});
app.get("/hello", (req,res) => {
    res.send("hello");
});

app.get("/rolldice", (req,res) => {
    let diceValue = Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs", {diceValue});
});


app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});