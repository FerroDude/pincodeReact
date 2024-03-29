import './pincode.css';
import { useState } from 'react';

const Pincode = () => {
  const [code, setCode] = useState([]);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

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
    if (isLocked) return;

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
        setFailedAttempts(0);
      } else if (!isCorrect) {
        setCode(['E', 'R', 'R', 'O', 'R']);
        setFailedAttempts(failedAttempts + 1);
      }

      setTimeout(() => {
        setCode([]);
        if (failedAttempts >= 2) {
          // If there have been 3 failed attempts
          setIsLocked(true); // Lock the keyboard
          setFailedAttempts(0); // Reset the number of failed attempts
          setTimeout(() => {
            setIsLocked(false); // Unlock the keyboard after 30 seconds
          }, 30000);
        }
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
        <div className="display">
          {isLocked ? 'LOCKED' : hideCode(code).join('')}
        </div>
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
          <button onClick={handleButtonClick} className="btn zero">
            0
          </button>
        </div>
      </div>
    </>
  );
};

export default Pincode;
