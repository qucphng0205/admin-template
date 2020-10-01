import React from 'react';
import styles from './post_card.module.scss';
import { Link, useParams } from 'react-router-dom';
import { MdModeComment } from 'react-icons/md';

export const PostCard = ({ post }) => {

  return (
    <div className={styles.postCard}>
      <Link className={`${styles.postHeading} mb-2`} to={`/posts/${post.id}`}>{post.title}</Link>
      <div className={`${styles.postDetails} mb-2`}>
        <span className={styles.postAuthor}>{post.author}</span>
        <span className='ml-2 mr-2'>•</span>
        <span className={styles.postDate}>{post.date}</span>
        <span className='ml-2 mr-2'>•</span>
        <MdModeComment color='var(--color-gray-2)' />
        <span className={styles.postComments}>1</span>
      </div>
      <p className={styles.postExcerpts}>{post.excerpt}</p>
    </div>
  );
}