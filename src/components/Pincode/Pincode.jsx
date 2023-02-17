import React from 'react';
import './pincode.css';
import { useState } from 'react';

const Pincode = () => {
  const [code, setCode] = useState([]);

  const handleButtonClick = (e) => {
    if (code.length === 3) {
      setCode([]);
      return;
    }
    const newCode = e.target.innerHTML;
    setCode([...code, newCode]);
  };
  return (
    <>
      <div className="pincodeContainer">
        <div className="display">{code}</div>
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
