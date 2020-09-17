import React from 'react';
import "./form.style.scss";

export const Form = ({ className, onSubmit, children }) => {
  const extendClass = className ? className : '';
  return <form onSubmit={onSubmit} className={`form ${extendClass}`}>{children}</form>
}

export const FormGroup = ({ children, id }) => {
  return (
    <div className="form__group" id={id}>
      {children}
    </div>
  );
}

export const FormInput = ({ type, id, value, onChange, placeholder }) => {
  return (
    <input type={type} id={id} value={value} onChange={onChange} placeholder={placeholder} className="form__input" />
  );
}
/*
    bsCustomPrefix?: string;
    htmlSize?: number;
    size?: 'sm' | 'lg';
    plaintext?: boolean;
    readOnly?: boolean;
    disabled?: boolean;
    value?: string | string[] | number;
    onChange?: React.ChangeEventHandler<FormControlElement>;
    custom?: boolean;
    type?: string;
    id?: string;
    isValid?: boolean;
    isInvalid?: boolean;
*/

export const FormLabel = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className="form__label">{children}</label>
  );
}
