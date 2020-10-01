import React from 'react';
import styles from "./table.module.scss"

export const Table = ({ children, className }) => (<table className={`${styles.table} ${className}`}>{children}</table>);

export const TableHeader = ({ children }) => (<thead className={styles.tableHeader}>{children}</thead>)

export const TableBody = ({ children }) => (<tbody>{children}</tbody>)

export const TableHead = ({ children }) => (<th className={styles.tableCell}>{children}</th>)

export const TableCell = ({ children, center }) => (<td className={`${styles.tableCell}${center ? ' ' + styles.tableCellCenter : ''}`}>{children}</td>)

export const TableRow = ({ children }) => (<tr className={styles.tableRow}>{children}</tr>)

export const TableItemRowHover = ({ children }) => (<div className={styles.tableItemRowHover}>{children}</div>)