import React from 'react';
import styles from './post_card.module.scss';

export const PostCard = ({ post }) => {
  return (
    <div className={styles.postCard}>
      <h4 className={styles.postHeading}>{post.title}</h4>
      <div className={styles.postDetail}>
        <a href="#" className={styles.postAuthor}>{post.author.name}</a>
        <span>•</span>
        <span className={styles.postDate}>{post.date}</span>
      </div>
      <p className={styles.postExcerpts}>{post.content}</p>
    </div>
  );
}