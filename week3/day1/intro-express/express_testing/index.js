const express = require("express");
const app = express();

//Listen for GET request to the /hello route
app.get("/hello", (req, res) => {
    //Issue HTML response with text "Hello World"
    res.send("Hello World!");
});

app.get("/goodbye", (req, res) => {
    res.send("Goodbye World :(");
});

app.get("/greet/:greeting/:name", (req, res) => {
    //Retrieve request parameters from the URL
    //req.params.{route parameter}
   res.send(`${req.params.greeting} ${req.params.name}`);
});

app.listen(3000);