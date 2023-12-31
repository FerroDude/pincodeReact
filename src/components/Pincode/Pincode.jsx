import React, { useEffect } from 'react';
import './pincode.css';
import { useState } from 'react';

const Pincode = () => {
  const [code, setCode] = useState([]);

  const hardCodedCode = ['1', '2', '3', '4'];

  const hideCode = (code) => {
    // If the code is 'OK' or 'WRONG', return it as is
    if (code.join('') === 'OK' || code.join('') === 'ERROR') {
      return code;
    }

    // Otherwise, return the code with all digits except the last one hidden
    const hiddenCode = code.map((number, index) => {
      if (index < code.length - 1) {
        return '*';
      }
      return number;
    });
    return hiddenCode;
  };
  const checkCode = (code) => {
    const isCorrect = code.every((number, index) => {
      return number === hardCodedCode[index];
    });
    return isCorrect;
  };

  const handleButtonClick = (e) => {
    if (
      code.length >= 4 ||
      code.join('') === 'OK' ||
      code.join('') === 'WRONG'
    ) {
      return;
    }

    const newCode = e.target.innerHTML;
    const updatedCode = [...code, newCode];

    if (updatedCode.length === 4) {
      const isCorrect = checkCode(updatedCode);

      if (isCorrect) {
        setCode(['O', 'K']);
      } else if (!isCorrect) {
        setCode(['E', 'R', 'R', 'O', 'R']);
      }

      setTimeout(() => {
        setCode([]);
      }, 3000);
      return;
    }

    setCode(updatedCode);
  };
  return (
    <>
      <div className="pincodeContainer">
        <div className="display">{hideCode(code).join('')}</div>
        <div className="keyboard">
          <button onClick={handleButtonClick} className="btn">
            1
          </button>
          <button onClick={handleButtonClick} className="btn">
            2
          </button>
          <button onClick={handleButtonClick} className="btn">
            3
          </button>
          <button onClick={handleButtonClick} className="btn">
            4
          </button>
          <button onClick={handleButtonClick} className="btn">
            5
          </button>
          <button onClick={handleButtonClick} className="btn">
            6
          </button>
          <button onClick={handleButtonClick} className="btn">
            7
          </button>
          <button onClick={handleButtonClick} className="btn">
            8
          </button>
          <button onClick={handleButtonClick} className="btn">
            9
          </button>
          <button onClick={handleButtonClick} className="btn">
            0
          </button>
        </div>
      </div>
    </>
  );
};

export default Pincode;
