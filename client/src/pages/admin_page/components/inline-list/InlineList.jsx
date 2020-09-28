import React from 'react';
import styles from './inline-list.module.scss';

export const InlineList = ({ children, className }) => {
  return (<ul className={`${styles.inlineList} ${className}`}>{children}</ul>)
}

InlineList.defaultProps = {
  className: '',
}

export const InlineListItem = ({ children }) => {
  return (<li className={styles.inlineListItem}>
    {children}
  </li>);
}

export const InlineListLink = ({ children, onClick }) => {
  return (<span href="/" className={styles.inlineListLink} onClick={onClick}>{children}</span>);
}