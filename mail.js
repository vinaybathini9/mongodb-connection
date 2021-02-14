var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bathinivinay201@gmail.com',
    pass: '123456'
  }
});

var mailOptions = {
  from: 'bathinivinay201@gmail.com',
  to: 'vinaybathini201@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});x