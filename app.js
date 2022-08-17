const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: 'ueb_@hotmail.com',
        pass: '87460104Enes*'
    }

});

var mailOptions = {
    from: 'ueb_@hotmail.com',
    to: 'baki.utku@hotmail.com',
    subject: 'Sending Email using Node.js test.',
    text: 'Test message.'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});