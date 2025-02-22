const express = require("express");
const { gettingTitlesUsingCallbacks } = require("../controllers/callbacks");

const router = express.Router();
router.get("/I/want/title", gettingTitlesUsingCallbacks);

module.exports = router;
