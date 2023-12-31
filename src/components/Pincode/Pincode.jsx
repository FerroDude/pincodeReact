import React, { useEffect } from 'react';
import './pincode.css';
import { useState } from 'react';

const Pincode = () => {
  const [code, setCode] = useState([]);

  const hardCodedCode = ['1', '2', '3', '4'];

  const hideCode = (code) => {
    if (code.join('') === 'OK' || code.join('') === 'ERROR') {
      return code;
    }

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
    let newCode;
    if (typeof e === 'object') {
      newCode = e.target.innerHTML; // For click events
    } else {
      newCode = e; // For keyboard events
    }

    if (
      code.length >= 4 ||
      code.join('') === 'OK' ||
      code.join('') === 'ERROR'
    ) {
      return;
    }

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

  const handleKeyDown = (e) => {
    if (!isNaN(e.key) && e.key >= 0 && e.key <= 9) {
      handleButtonClick(e.key);
    }
  };
  return (
    <>
      <div className="pincodeContainer" onKeyDown={handleKeyDown} tabIndex={0}>
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
