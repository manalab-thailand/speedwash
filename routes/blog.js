var express = require("express");
var router = express.Router();
const axios = require("axios");
var moment = require('moment');

router.get("/", async function (req, res, next) {
    const FacebookAPI = "https://graph.facebook.com/v6.0/222927528190346/posts?fields=attachments{media,type}%2Cfull_picture%2Cmessage%2Ccreated_time%2Cshares&transport=cors&access_token=EAAiedDGBAi4BAIu4Rj9hhV3QvGsxGfxPz8jDuzZC6yx42ZCafi8JNSaXEZA7UMmYc3FqsUDmyvbPIqs0fPZAPc75HFf7K30vcYFa3I6TLsZAfO4ZAgoDlWNjaHvqqlTNwhnEH6tPQsYmvqdN5ne8mGqHZCcCmwYR8lQJWM2YPzZAZAgZDZD"
    const response = await axios.get(FacebookAPI);
    const DatePost1 =  moment(response.data.data[0].created_time).format('YYYY-MM-DD');
    const DatePost2 =  moment(response.data.data[1].created_time).format('YYYY-MM-DD');
    const DatePost3 =  moment(response.data.data[2].created_time).format('YYYY-MM-DD');
    res.render("page/blog", { title: "SpeedWash", post : response.data , Date1 : DatePost1 , Date2 : DatePost2 , Date3 : DatePost3 });
});

module.exports = router;
