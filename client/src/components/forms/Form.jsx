import React from 'react';
import "./form.style.scss";

export const Form = ({ className, onSubmit, children }) => {
  const extendClass = className ? className : '';
  return <form onSubmit={onSubmit} className={`form ${extendClass}`}>{children}</form>
}

export const FormGroup = ({ children, ...otherProps }) => {
  return (
    <div className="form__group" {...otherProps}>
      {children}
    </div>
  );
}

export const FormInput = ({ ...otherProps }) => {
  return (
    <input {...otherProps} className="form__input" />
  );
}

export const FormTextArea = ({ ...otherProps }) => {
  return <textarea className='form__textarea' {...otherProps}></textarea>
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