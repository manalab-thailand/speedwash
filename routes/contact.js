const express = require("express");
const router = express.Router();
const axios = require("axios");
const constants = require("../public/javascripts/constant");

router.get("/", async function (req, res, next) {
  // axios
  const GoogleSheetData = `https://sheets.googleapis.com/v4/spreadsheets/15qVChEyQ7Gu4rNgZK39gZ_RX4grMWM2EW3F-yk83C_M/values/Outlets!A2:S20?key=${constants.GOOGLEKEY}`;
  const response = await axios.get(GoogleSheetData);
  // key: "AIzaSyCdQCEwdWm7PB6InxPfQ-Xlf6P8Vjer2xk",
  res.render("page/contact", { title: "Outlets", posts: response.data });
});

module.exports = router;
