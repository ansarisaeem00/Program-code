var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'thesak1310@gmail.com',
    pass: 'bhagbhosdik'
  }
});

var mailOptions = {
  from: 'thesak1310@gmail.com',
  to: 'ansarisaeem00@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});