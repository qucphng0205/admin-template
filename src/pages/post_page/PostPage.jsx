import React, { useCallback } from 'react';
import styles from './post_page.module.scss';
import ReactHtmlParser from "react-html-parser";
import { useParams } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import Comment from './Comment';
import CommentForm from './CommentForm';
import { act_AddComment } from '../../redux/comment/comment.action';

const PostPage = ({ addComment }) => {
  const { id } = useParams();
  const post = useSelector((state) => state.postReducer.posts.find((p) => p.id == id));
  const comments = useSelector((state) => state.commentReducer.comments.filter((c) => c.postId == id));
  const submitComment = useCallback((name, email, content) => {
    addComment(
      {
        author: {
          name,
          email,
        },
        content,
        date: Date.now(),
        status: 'Pending',
        postId: id,
      }
    );
  });

  return (
    <div className={styles.postPage}>
      <div className="post">
        <h1 className={styles.postTitle}>
          {post.title}
        </h1>
        <div className={styles.postDetails}>
          <span className={styles.postAuthor}>{post.author}, </span>
          <span className={styles.postDate}>{post.date}</span>
        </div>
        <div className={styles.postContent}>
          {ReactHtmlParser(post.content)};
        </div>
      </div>
      <div className={styles.postComments}>
        {comments.length > 0 ? comments.map((comment, id) => <Comment key={id} comment={comment} />) : ''}
        <CommentForm callback={submitComment} />
      </div>

    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addComment: (comment) => dispatch(act_AddComment(comment)),
});

export default connect(null, mapDispatchToProps)(PostPage);