const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/", function (req, res, next) {

    const name = req.body.Name;
    const email = req.body.Email;
    const text = req.body.Text;

    const html = `New Request from ${name}<br/> Email: ${email} <br/> Message: ${text}`

    const transporter = nodemailer.createTransport({
        host: `smtp.yandex.com`,
        port: 465,
        auth: {
        user: `no-reply@phajidagroup.com`,
        pass: `qwerty1234`,
        },
    });

    let mailOptions = {
        from: `no-reply@phajidagroup.com`,
        to: `kanomcake1928@gmail.com`,
        subject: name,
        html: html,
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
        console.log(err);
        } else {
        console.log(info);
        }
    });
    res.redirect(`/contact`);
    
});

module.exports = router;
