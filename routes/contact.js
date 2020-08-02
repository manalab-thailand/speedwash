const express = require("express");
const router = express.Router();

router.get("/", async function (req, res, next) {

  res.render("page/contact", { title: "Outlets"});
});

module.exports = router;
