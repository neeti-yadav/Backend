const express = require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

app.get("/", (req , res) => {
    res.send("hello i m root ");
})

app.get("/:username/:id", (req , res) => {
    let {username,id} = req.params;
    let htmlStr = `<h1>welcome @${username}</h1`
    res.send(htmlStr);
})

app.get("/search", (req,res) => {
    console.log(req.query);
    res.send("no results");
})

app.get("/apple", (req , res) => {
    res.send("you contacted apple path");
})

app.get("/orange", (req , res) => {
    res.send("you contacted orange path");
})

// app.get("*", (req , res) => {
//     res.send("this path does not exist");
// });

app.post("/", (req , res) => {
    res.send("you sent a post request");
});

// app.use((req, res) => {
//     console.log("request received");
//     let code = "<h1>fruits</h1> <ul><li>apple</li></ul>";
//     res.send(code);
// });