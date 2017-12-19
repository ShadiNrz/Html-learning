"use strict";
const express_1 = require("express");
const path = require("path");
let router = express_1.Router();
router.get("/", (req, res) => {
    var file = path.join(__dirname + '/../HtmlLearning/index.html');
    res.sendFile(file);
});
router.get("/jquery.html", (req, res) => {
    var file = path.join(__dirname + '/../HtmlLearning/jQuery.html');
    res.sendFile(file);
});
router.get("/jQueryAjax.html", (req, res) => {
    var file = path.join(__dirname + '/../HtmlLearning/jQueryAjax.html');
    res.sendFile(file);
});
router.get("/jQuerySelector.html", (req, res) => {
    var file = path.join(__dirname + '/../HtmlLearning/jQuerySelector.html');
    res.sendFile(file);
});
router.get("/jQueryEffects.html", (req, res) => {
    var file = path.join(__dirname + '/../HtmlLearning/jQueryEffects.html');
    res.sendFile(file);
});
router.get("/jQueryTraversing.html", (req, res) => {
    var file = path.join(__dirname + '/../HtmlLearning/jQueryTraversing.html');
    res.sendFile(file);
});
router.get("/BS.html", (req, res) => {
    var file = path.join(__dirname + '/../HtmlLearning/BS.html');
    res.sendFile(file);
});
router.get("/BS_rtl.html", (req, res) => {
    var file = path.join(__dirname + '/../HtmlLearning/BS_rtl.html');
    res.sendFile(file);
});
router.get("/semantic.html", (req, res) => {
    var file = path.join(__dirname + '/../HtmlLearning/semantic.html');
    res.sendFile(file);
});
router.get("/semantic_rtl.html", (req, res) => {
    var file = path.join(__dirname + '/../HtmlLearning/semantic_rtl.html');
    res.sendFile(file);
});
router.get("/exam.html", (req, res) => {
    var file = path.join(__dirname + '/../HtmlLearning/exam.html');
    res.sendFile(file);
});
router.get("/kendohome.html", (req, res) => {
    var file = path.join(__dirname + '/../HtmlLearning/kendohome.html');
    res.sendFile(file);
});
router.post("/test.html", (req, res) => {
    var file = path.join(__dirname + '/../HtmlLearning/test.html');
    res.sendFile(file);
});

router.get("/get/jsonData", (req, res) => {
    res.set("Content-Type", "application/json");
    res.send({
        result: 0, data: {
            name: "shadi",
            gender: "female"
        }
    });
});
router.post("/post/jsonData", (req, res) => {
    res.set("Content-Type", "application/json");
    var params = req.body;
    if (params.type == "user") {
        res.send({
            result: 0, data: {
                name: "shadi",
                gender: "female"
            }
        });
    }
    else {
        res.send({
            result: -1,
            message: "you should send data"
        });
    }
});
module.exports = router;
//# sourceMappingURL=main.js.map