const express = require("express");
const router = express.Router();
const axios = require("axios");
const constants = require("../public/javascripts/constant");

router.get("/", async function (req, res, next) {

    const googlesheetData = `https://sheets.googleapis.com/v4/spreadsheets/15qVChEyQ7Gu4rNgZK39gZ_RX4grMWM2EW3F-yk83C_M/values/Outlets!A2:S20?key=${constants.GOOGLEKEY}`;
    const response = await axios.get(googlesheetData);
    
    res.render("page/branches", { title: "Branches", dataMap: response.data });
});

module.exports = router;
