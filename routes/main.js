"use strict";
const express_1 = require("express");
let router = express_1.Router();
router.get("/get/jsonData", (req, res) => {
    res.set("Content-Type", "application/json");
    res.send({
        result: 0, data: {
            name: "shadi",
            gender: "female"
        }
    });
});
router.post("/post/sonData", (req, res) => {
    res.set("Content-Type", "application/json");
    res.send({
        result: 0, data: {
            name: "shadi",
            gender: "female"
        }
    });
});
module.exports = router;
//# sourceMappingURL=main.js.map