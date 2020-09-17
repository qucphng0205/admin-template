import React from 'react';
import "./button.style.scss";

const STYLES = {
  primary: "btn--primary",
  warning: "btn--warning",
  danger: "btn--danger",
  success: "btn--success",
  dark: "btn--dark",

  primaryOutline: "btn--primary-outline",
  warningOutline: "btn--warning-outline",
  dangerOutline: "btn--danger-outline",
  successOutline: "btn--success-outline",
  darkOutline: "btn--dark-outline",
};

const SIZES = {
  sm: "btn--sm",
  md: "btn--md",
  lg: "btn--lg",
};

export const Button = ({ type, variant, children, size, className }) => {

  const setButtonStyle = STYLES[variant] ? STYLES[variant] : STYLES['primary'];
  const setButtonSize = SIZES[size] ? SIZES[size] : SIZES['md'];
  const extendClass = className ? className : '';

  return <button type={type} className={`btn ${setButtonSize} ${extendClass} ${setButtonStyle}`} >{children}</button>
}

Button.defaultProps = {
  variant: 'primary',
  size: 'md',
  className: '',
  type: 'button',
}