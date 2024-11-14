const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Server is running');
  });

const transporter = nodemailer.createTransport({
    host: 'smtp.wp.pl',
    port: 465, 
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS,
    },
  });
  

app.post('/send-email', (req, res) => {
  const { email, message } = req.body;
  
  const mailOptions = {
    from: email,
    to: 'gruszka.leszek@wp.pl',
    subject: 'Wiadomość z formularza kontaktowego',
    text: message,
  };
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Wiadomość wysłana pomyślnie!');
  });
  
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
