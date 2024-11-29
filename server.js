require('dotenv').config();

console.log(process.env.EMAIL_USER, process.env.EMAIL_PASS);
console.log('EMAIL_USER:', process.env.EMAIL_USER); 
console.log('EMAIL_PASS:', process.env.EMAIL_PASS); 

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Server is running');
  });

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS,
    },
  });
  

app.post('/send-email', (req, res) => {
  const { email, message } = req.body;

  // Dodaj logowanie, aby sprawdzić, czy dane są poprawne
  console.log('Otrzymane dane:', { email, message });
  
  const mailOptions = {
    from: email,
    to: 'gruszka.leszek@wp.pl',
    subject: 'Wiadomość z formularza kontaktowego',
    text: message,
  };
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Błąd podczas wysyłania e-maila:', error);
      
      return res.status(500).send(error.toString());
    }
    console.log('Wiadomość wysłana:', info.response);
    res.status(200).send('Wiadomość wysłana pomyślnie!');
  });
  
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});