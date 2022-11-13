import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({ buttonClass, clickFunc, buttonText, disabled, icon }) => {
  return (
    <button className={buttonClass} onClick={clickFunc} disabled={disabled}>
      <FontAwesomeIcon className="icon" icon={icon} />
      {buttonText}
    </button>
  );
};

export default Button;
