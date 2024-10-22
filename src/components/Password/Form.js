'use client'; 

import { useState } from 'react';

export default function PasswordForm({ csrfToken }) {
  const [password, setPassword] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (value.length >= 7) {
      e.target.form.submit(); // Automatically submit the form when 8 characters are reached
    }
  };

  return (
    <form
      method='post'
      action='/api/auth/callback/credentials'
    >
      <input name='csrfToken' type='hidden' defaultValue={csrfToken} />
      <input
        name='password'
        type='password'
        placeholder='Password'
        value={password}
        onChange={handleInputChange}
        maxLength={8}
      />
    </form>
  );
}
