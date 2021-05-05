const nodemailer = require('nodemailer');

let transport = nodemailer.createTransport({
    host: '',
    port: 2525,
    auth: {
        user: '',
        pass: ''
    }
});

const message = {
    from: 'hi@example.com', // Sender address
    to: 'to@email.com', // List of recipients
    subject: 'Nodemailer Example Email', // Subject line
    text: 'You have received a nodemailer example email!' // Plain text body
};
transport.sendMail(message, function (err, info) {
    if (err) {
        console.log(err)
    } else {
        console.log(info);
    }
});
