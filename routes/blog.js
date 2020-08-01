const express = require("express");
const router = express.Router();
const axios = require("axios");
const moment = require('moment');
const constants = require('../public/javascripts/constant')

router.get("/", async function (req, res, next) {

    const response = await axios.get(constants.FACEBOOKAPI);

    let arrayDate = [];

    for(let i = 0; i<6; i++){
        arrayDate[i] = moment(response.data.data[i].created_time).format(`YYYY-MM-DD`)
    }
    
    res.render("page/blog", { title: "SpeedWash", post : response.data , Date : arrayDate});
});

module.exports = router;
