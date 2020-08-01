var express = require("express");
var router = express.Router();
const axios = require("axios");

router.get("/", async function (req, res, next) {
    const FacebookAPI = "https://graph.facebook.com/v7.0/973676982697761/posts?fields=attachments%7Bmedia,type%7D%2Cfull_picture%2Cmessage%2Ccreated_time%2Cshares&transport=cors&access_token=EAARFZCbc86ZAQBACNazuVRGDetFqvXGIp2tn4FK2PBcN6xCZBLvGDMVcI4zIAjOskJEaZA06NorBWlLPUIlVJbiKp88dlW09JPgGaluXIELZCDk0Gt9y14eGtX6yqVu43NNPHbpvrX4ZBTGjMZCNmJLemehOfaBUxpq4qdLjvvkuwZDZD"
    const response = await axios.get(FacebookAPI);
    res.render("page/index", { title: "SpeedWash", post : response.data });
});

module.exports = router;
