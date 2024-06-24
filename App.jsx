import React, { useState } from 'react';
import './App.css';

const PasswordChecker = () => {
  const [password, setPassword] = useState('');
  const [requirements, setRequirements] = useState({
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
    length: false,
  });

  const checkPassword = (value) => {
    const updateRequirements = {
      uppercase: /[A-Z]/.test(value),
      lowercase: /[a-z]/.test(value),
      numbers: /\d/.test(value),
      symbols: /\w/.test(value),
      length: value.length >= 8,
    };

    setRequirements(updateRequirements);
  }
  
  const handleChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    checkPassword(value);
  }

  const buttonDisabled = Object.values(requirements).includes(false)

  const handleButtonClick = () => {
    if (!buttonDisabled) {
      console.log('botão clicado')

    }
  }

  return (
    <div classname="password-checker">
      <div className="box">
        <input type="password" value={password} onChange={handleChange} />

        <button className="submit-button" onClick={handleButtonClick}
          disabled={buttonDisabled}>
          Clique aqui
        </button>

      </div>

      <ul className="requirements-list">
        <li className={requirements.uppercase ? "fulfilled" : "unfulfilled"}> Letra maiúscula </li>
        <li className={requirements.lowercase ? "fulfilled" : "unfulfilled"}> Letra minúscula </li>
        <li className={requirements.numbers ? "fulfilled" : "unfulfilled"}> Números </li>
        <li className={requirements.symbols ? "fulfilled" : "unfulfilled"}> Símbolos </li>
        <li className={requirements.length ? "fulfilled" : "unfulfilled"}> Tamanho minimo de 8 caracteres </li>
      </ul>
    </div>
  );
}

export default PasswordChecker;
