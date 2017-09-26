import {IRouter, Router} from "express";


let router: Router = Router();


router.get("/get/jsonData", (req, res) => {

    res.set("Content-Type", "application/json");

    res.send({
        result: 0, data: {
            name : "shadi",
            gender : "female"
        }
    })

});


router.post("/post/sonData", (req, res) => {

    res.set("Content-Type", "application/json");

    res.send({
        result: 0, data: {
            name : "shadi",
            gender : "female"
        }
    })

});

export = router;