var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var workers = require("./routers/worker/workerActions")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS, PATCH");
    next();
});

app.use("/workers", workers);

app.listen(8080, () => {
    console.log("server is start magic on ", 8080)
})