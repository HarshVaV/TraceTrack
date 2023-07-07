const express = require("express");
const { policeController } = require("../controllers");



const router = express.Router();

router.route("/")
    .get(policeController.getPersons)

module.exports = router;