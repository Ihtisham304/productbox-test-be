const express = require("express");
const { gettingTitlesUsingPromises } = require("../controllers/promises");

const router = express.Router();
router.get("/I/want/title", gettingTitlesUsingPromises);

module.exports = router;
