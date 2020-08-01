const express = require("express");
const router = express.Router();
const axios = require("axios");
const constants = require('../public/javascripts/constant')

router.get("/", async function (req, res, next) {
    const response = await axios.get(constants.FACEBOOKAPI);
    res.render("page/index", { title: "SpeedWash", post : response.data });
});

module.exports = router;
