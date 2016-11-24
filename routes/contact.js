var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.get('/', function(req, res){
    res.render('contact', {title: "Contact"});
});

router.post('/send', function(req, res){

    // var transporter = nodemailer.createTransport('smtps://primoz.cvenkelj@gmail.com:Mojpesjenor2@smtp.gmail.com');

    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            //provide your mail and password
            user: 'example@gmail.com',
            pass: 'password'
        }
    });

    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: 'User', // sender address
        to: 'example@gmail.com', // list of receivers
        subject: 'New email from the contact site', // Subject line
        text: 'A new mail has been sent by' + req.body.name + 'with the following email: ' + req.body.email + ' and message: ' + req.body.message, // plaintext body
        html: '<p>You got a website submission with the following details...</p><ul><li>Name: <b>' + req.body.name + '</b></li><li>Email: <b>' + req.body.email + '</b></li><li>Message: <b>' + req.body.message + '</b></li></ul>'
    };
// send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
        res.redirect('/');
    });

});

module.exports = router;