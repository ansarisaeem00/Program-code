var express = require('express'),
    path = require('path'),
    nodeMailer = require('nodemailer'),
    bodyParser = require('body-parser');

    var app = express();
    app.set('view engine', 'ejs');
    app.use(express.static('views'));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    var port = 3009;
    app.get('/', function (req, res) {
      res.render('indexForm');
    });
    app.post('/send-email', function (req, res) {
      let transporter = nodeMailer.createTransport({
          host: 'Gmail',
          port: 465,
          secure: true,
          auth: {
              user: 'ansarisaeem00@gmail.com',
              pass: 'msaeem72336'
          }
      });
      let mailOptions = {
          from: '"Saeem Ansari" <ansarisaeem00@gmail.com>', // sender address
          to: req.body.to, // list of receivers
          subject: req.body.subject, // Subject line
          text: req.body.body, // plain text body
          html: '<b>NodeJS Email Tutorial</b>' // html body
      };

      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message %s sent: %s', info.messageId, info.response);
              res.render('indexForm');
          });
      });
          app.listen(port, function(){
            console.log('Server is running at port: ',port);
          });