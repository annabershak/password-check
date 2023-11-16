// src/App.js
import React from 'react';
import PasswordInput from './components/PasswordInput';

const App = () => {
  return (
    <div>
      <h1>Password Validator</h1>
      <h3>Please enter your password</h3>
      <PasswordInput />
    </div>
  );
};

export default App;
