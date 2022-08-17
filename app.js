const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: 'YOUR_EMAIL',
        pass: 'YOUR_PASS'
    }

});

var mailOptions = {
    from: 'YOUR_EMAIL',
    to: 'RECIEVER_EMAIL',
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
