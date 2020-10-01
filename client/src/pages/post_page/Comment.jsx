import React from 'react';
import styles from './comment.module.scss';
import { FaUserCircle } from "react-icons/fa";

const Comment = ({ comment }) => {
  return <div className={styles.comment}>

    <div className='d-flex align-items-center'>
      <FaUserCircle size="4rem" />
      <p className={styles.commentAuthor}>
        <span className={styles.commentAuthorName}>{comment.author.name}</span>
        <span className={styles.commentAuthorEmail}> - {comment.author.email}</span> <br />
        <span className={styles.commentDate}>{comment.date}</span>
      </p>
    </div>

    <p className={styles.commentContent}>{comment.content}</p>

  </div>;
}

export default Comment;