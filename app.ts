import * as http from "http";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";

import mainRouter = require("./routes/main");
import * as path from "path";

var app = express();


// app.set("view engine", "vash");

app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use(mainRouter);

let server = http.createServer(app);

server.listen(8080);

console.log("Server starting on port 8080 ...");

export = app;