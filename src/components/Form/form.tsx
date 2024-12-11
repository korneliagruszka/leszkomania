import './form.scss';
import React, { FC, useState } from 'react';

const Form: FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message }),
      });

      if (response.ok) {
        alert('Wiadomość wysłana pomyślnie!');
        setEmail(''); // Czyszczenie pól formularza
        setMessage('');
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
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form_input"
            placeholder="Wpisz swój adres email"
            required
          />
        </div>
        <div className="form_group">
          <label htmlFor="message">Wiadomość do autora:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="form_textarea"
            placeholder="Wpisz swoją wiadomość"
            required
          />
        </div>
        <button type="submit" className="form_submit_button">
          Wyślij
        </button>
      </form>
    </div>
  );
};

export default Form;