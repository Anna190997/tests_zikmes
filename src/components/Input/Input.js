import React from 'react';

const Input = ({ typeInput, classInput, placeholderInput, valueInput, onChange, onBlur, name }) => {
  return (
    <input
      type={typeInput}
      className={classInput}
      name={name}
      placeholder={placeholderInput}
      value={valueInput}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

export default Input;
