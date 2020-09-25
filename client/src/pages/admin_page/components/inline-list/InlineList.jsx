import React from 'react';
import styles from './inline-list.module.scss';

export const InlineList = ({ children, className }) => {
  return (<ul className={`${styles.inlineList} ${className}`}>{children}</ul>)
}

export const InlineListItem = ({ children }) => {
  return (<li className={styles.inlineListItem}>
    {children}
  </li>);
}

export const InlineListLink = ({ children, onClick }) => {
  return (<span href="/" className={styles.inlineListLink} onClick={onClick}>{children}</span>);
}



//   <li className={styles.inlineListItem}>
//     <a href="#published" className={styles.inlineListLink}>Published</a>
//   </li>
//   <li className={styles.inlineListItem}>
//     <a href="#drafts" className={styles.inlineListLink}>Drafts</a>
//   </li>
//   <li className={styles.inlineListItem}>
//     <a href="#trash" className={styles.inlineListLink}>Trash</a>
//   </li>
// </ul >