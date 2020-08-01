var express = require("express");
var router = express.Router();
const axios = require("axios");
var moment = require('moment');

router.get("/", async function (req, res, next) {
    const FacebookAPI = "https://graph.facebook.com/v7.0/973676982697761/posts?fields=attachments%7Bmedia,type%7D%2Cfull_picture%2Cmessage%2Ccreated_time%2Cshares&transport=cors&access_token=EAARFZCbc86ZAQBACNazuVRGDetFqvXGIp2tn4FK2PBcN6xCZBLvGDMVcI4zIAjOskJEaZA06NorBWlLPUIlVJbiKp88dlW09JPgGaluXIELZCDk0Gt9y14eGtX6yqVu43NNPHbpvrX4ZBTGjMZCNmJLemehOfaBUxpq4qdLjvvkuwZDZD"
    const response = await axios.get(FacebookAPI);
    const DatePost =  moment(response.data.data[0].created_time).format('YYYY-MM-DD');
    let arrayDate = [];
    for(let i = 0; i<6; i++){
        arrayDate[i] = moment(response.data.data[i].created_time).format('YYYY-MM-DD')
    }
    
    res.render("page/blog", { title: "SpeedWash", post : response.data , Date : arrayDate});
});

module.exports = router;
