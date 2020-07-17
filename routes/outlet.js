var express = require("express");
var router = express.Router();
const axios = require("axios");

router.get("/", async function (req, res, next) {
    const GoogleSheetData =
        "https://sheets.googleapis.com/v4/spreadsheets/15qVChEyQ7Gu4rNgZK39gZ_RX4grMWM2EW3F-yk83C_M/values/Outlets!A2:S20?key=AIzaSyB9E4_jgrs0LLdVSGWhif84Tw5l1m18gYo";
    const response = await axios.get(GoogleSheetData);
    res.render("page/outlet", { title: "Branches", posts: response.data });
});

module.exports = router;