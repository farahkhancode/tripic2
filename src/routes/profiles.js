const express = require("express");
const router = express.Router();

const profileController = require("../controllers/profileController")

router.get("/profiles", profileController.index);

module.exports = router;
