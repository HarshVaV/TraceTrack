const express = require("express");
const { policeController } = require("../controllers");
const { uploadMiddleware } = require("../middleware/multer");



const router = express.Router();

router.get("/" , policeController.getPersons);

router.get("/view/:id" , policeController.getPerson);

router.route("/edit/:id")
    .get(policeController.editPersonGet)
    .post(policeController.editPersonPost);

router.route("/create")
    .get((req , res)=>{
        res.render("create");
    })
    .post(uploadMiddleware , policeController.createPerson);

module.exports = router;