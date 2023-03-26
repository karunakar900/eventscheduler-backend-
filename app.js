const express = require('express');
const bodyparser = require("body-parser");
const mongoose = require('mongoose');
const datarouter = require('./routes');
const app = express();

app.use(bodyparser.json())
const mongourl = "mongodb+srv://karunakar200:zbw7SPTaWjcEeEDk@cluster0.oszyhxs.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongourl, {
    UseNewUrlParser: true,
})
    .then(() => {
        console.log("connected to database.");
    })
    .catch((e) => console.log(e));

app.use("/", datarouter);





app.listen(3000, () => {
    console.log("server is up at port 3000");
});




