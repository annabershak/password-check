
import React, { useState } from 'react';
import axios from 'axios';

const PasswordInput = () => {
  const [password, setPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [containsWord, setContainsWord] = useState(false);

  const handlePasswordChange = async (e) => {
    const newPassword = e.target.value;
    const isValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/.test(newPassword);

    setPassword(newPassword);
    setIsValidPassword(isValid);

    
    try {
      const response = await axios.get(
        'https://api.dictionaryapi.dev/api/v2/entries/en_US/' + newPassword
      );

     
      setContainsWord(response.data.length > 0);
    } catch (error) {
      console.error('Error checking password against dictionary:', error);
      setContainsWord(false);
    }
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
