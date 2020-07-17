var express = require("express");
var router = express.Router();
const nodemailer = require("nodemailer");

router.post("/", function (req, res, next) {

    const Name = req.body.Name;
    const Email = req.body.Email;
    const Text = req.body.Text;

    const html = `New Request from ${Name}<br />Email: ${Email}<br />Message: ${Text}`

    const transporter = nodemailer.createTransport({
        host: "smtp.yandex.com",
        port: 465,
        auth: {
        user: "no-reply@phajidagroup.com",
        pass: "qwerty1234",
        },
    });

    let mailOptions = {
        from: "no-reply@phajidagroup.com",
        to: "kanomcake1928@gmail.com",
        subject: Name,
        html: html,
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
        console.log(err);
        } else {
        console.log(info);
        }
    });
    res.redirect("/contact");
    
});

module.exports = router;
