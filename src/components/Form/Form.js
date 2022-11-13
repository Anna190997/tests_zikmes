import React from 'react';
import './Form.scss';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { useState, useEffect } from 'react';
import { request } from '../../servicies';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Form = () => {
  const [numberInput, setNumberInput] = useState('');
  const [requestResult, setRequestResult] = useState('');
  const [numberDirty, setNumberDirty] = useState(false);
  const [numberError, setEmailError] = useState('Введите номер телефона');
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (numberError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [numberError]);

  const changeInputValue = (numberInput) => {
    setNumberInput(numberInput);
    setEmailError('');
  };

  const changeInput = (e) => {
    changeInputValue(e.target.value);
  };

  const sendRequest = (e) => {
    e.preventDefault();
    request(numberInput, setRequestResult);
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'telephone':
        setNumberDirty(true);
        break;
    }
  };

  return (
    <div className="form_wrapper">
      {!requestResult ? (
        <form className="form">
          {numberDirty && numberError && <div className="error_message">{numberError}</div>}
          <Input
            classInput="number_input"
            typeInput="tel"
            onBlur={(e) => blurHandler(e)}
            name="telephone"
            onChange={changeInput}
            placeholderInput="Ваш номер..."
          />
          <Button
            buttonClass="order_button"
            disabled={!formValid}
            buttonText="ЗАКАЗАТЬ"
            clickFunc={sendRequest}
            icon={faPhone}
            buttonWrapperClass="wrapper_button"
          />
        </form>
      ) : (
        <span className="result_request">{requestResult.message}</span>
      )}
    </div>
  );
};

export default Form;
