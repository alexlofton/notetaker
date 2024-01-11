/// use express router to create get and post routes at localhost:3001/api
const router = require("express").Router();
const fs = require("fs");
let db = require("../db/db.json");

router.get("/notes", (req, res) => {
    res.json(db)
})

router.post("/notes", (req, res) => {
    let noteModel = {
        title: req.body.title, 
        text: req.body.text,
        id: Math.random(),
    }
    db.push(noteModel)
    fs.writeFileSync("./db/db.json", JSON.stringify(db))
    res.json(db)
})


module.exports = router