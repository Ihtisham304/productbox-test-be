const express = require("express");
const { gettingTitlesUsingAsync } = require("../controllers/async");

const router = express.Router();
router.get("/I/want/title", gettingTitlesUsingAsync);

module.exports = router;
