import './form.scss';
import React, { FC, useState } from 'react';

const Form: FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Message:', message);
    setEmail('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="form_container">
      <div className="form_group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Wpisz swój adres email"
          className="form_input"
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
          placeholder="Wpisz swoją wiadomość"
          className="form_textarea"
          required
        />
      </div>
      <button type="submit" className="form_submit_button">
        Wyślij
      </button>
    </form>
  );
};

export default Form;