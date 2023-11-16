// src/components/PasswordInput.js
import React, { useState } from 'react';

const PasswordInput = () => {
  const [password, setPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [containsWord, setContainsWord] = useState(false);

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    const isValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/.test(newPassword);

    setPassword(newPassword);
    setIsValidPassword(isValid);

    // Check if the password contains a full English word
    setContainsWord(newPassword.includes('hello')); // Replace with actual check

    // You can replace the above line with an API call to check against a dictionary
  };

  return (
    <div>
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        style={{ borderColor: isValidPassword ? 'inherit' : 'red' }}
      />
      {!isValidPassword && (
        <p style={{ color: 'red' }}>
          Password must have: 8-16 characters, at least one digit, and only Latin alphabet letters.
        </p>
      )}
      {containsWord && (
        <p style={{ color: 'red' }}>Password should not contain a full English word.</p>
      )}
    </div>
  );
};

export default PasswordInput;
