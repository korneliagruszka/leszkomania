import './form.scss';
import React, { FC, useState } from 'react';

const Form: FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Resetowanie błędów
    setEmailError('');
    setMessageError('');
    setSuccessMessage('');

    let isValid = true;

    if (!validateEmail(email)) {
      setEmailError('Email nieprawidłowy');
      isValid = false;
    }

    if (message.trim() === '') {
      setMessageError('Wpisz treść wiadomości');
      isValid = false;
    }

    if (!isValid) return;

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message }),
      });

      if (response.ok) {
        setSuccessMessage('Dziękuję za wiadomość! 🎉');
        setEmail('');
        setMessage('');

        // Ukrycie wiadomości po 5 sekundach
        setTimeout(() => setSuccessMessage(''), 5000);
      } else {
        alert('Wystąpił błąd podczas wysyłania wiadomości.');
      }
    } catch (error) {
      console.error('Błąd:', error);
      alert('Wystąpił błąd. Spróbuj ponownie.');
    }
  };

  return (
    <div className="form_section">
      <h2 className="form_header">Skontaktuj się ze mną</h2>
      <form onSubmit={handleSubmit} className="form_container">
        <div className="form_group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`form_input ${emailError ? 'error' : ''}`}
            placeholder="Wpisz swój adres email"
          />
          {emailError && <p className="error_message">{emailError}</p>}
        </div>

        <div className="form_group">
          <label htmlFor="message">Wiadomość do autora:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`form_textarea ${messageError ? 'error' : ''}`}
            placeholder="Wpisz swoją wiadomość"
          />
          {messageError && <p className="error_message">{messageError}</p>}
        </div>

        <button type="submit" className="form_submit_button">
          Wyślij
        </button>

        {successMessage && <p className="success_message">{successMessage}</p>}
      </form>
    </div>
  );
};

export default Form;