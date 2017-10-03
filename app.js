"use strict";
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mainRouter = require("./routes/main");
const path = require("path");
var app = express();
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(mainRouter);
let server = http.createServer(app);
server.listen(8080);
console.log("Server starting on port 8080 ...");
module.exports = app;
//# sourceMappingURL=app.js.map