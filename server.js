require('dotenv').config(); // Ładowanie zmiennych środowiskowych

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Test logowania zmiennych środowiskowych
console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASS:', process.env.EMAIL_PASS);

// Ustawienie transportera Nodemailer dla Gmaila
const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS, 
  },
});

// Testowanie połączenia z serwerem SMTP
transporter.verify((error, success) => {
  if (error) {
    console.error('SMTP Connection Error:', error);
  } else {
    console.log('SMTP Server is ready to send messages');
  }
});

// Trasa testowa
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Trasa do obsługi formularza
app.post('/send-email', (req, res) => {
  const { email, message } = req.body;

  // Logowanie danych otrzymanych z frontendu
  console.log('Otrzymane dane:', { email, message });

  // Ustawienia wiadomości e-mail
  const mailOptions = {
    from: `"Formularz kontaktowy" <${process.env.EMAIL_USER}>`,
    to: 'maria.gruszka65@gmail.com', 
    subject: 'Wiadomość z formularza kontaktowego',
    text: `Otrzymałeś nową wiadomość z formularza kontaktowego.\n\n
          Adres nadawcy: ${email}\n\n
          Treść wiadomości:\n${message}`,
    replyTo: email,
  };

  // Wysyłanie wiadomości e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Błąd podczas wysyłania e-maila:', error);
      return res.status(500).send('Błąd podczas wysyłania wiadomości: ' + error.toString());
    }
    console.log('Wiadomość wysłana:', info.response);
    res.status(200).send('Wiadomość wysłana pomyślnie!');
  });
});

// Start serwera
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
