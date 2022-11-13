import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({ buttonClass, clickFunc, buttonText, disabled, icon, buttonWrapperClass }) => {
  return (
    <button className={buttonClass} onClick={clickFunc} disabled={disabled}>
        <div className={buttonWrapperClass}>
      <FontAwesomeIcon className="icon" icon={icon} />
      {buttonText}
        </div>
    </button>
  );
};

export default Button;
