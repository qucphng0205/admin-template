import React from 'react';
import { connect } from "react-redux";
import { PostCard } from '../../components/post_card/PostCard';

import styles from './home_page.module.scss';

const HomePage = ({ posts }) => {
  return (
    <div className={styles.homePage}>
      {
        posts.map((post) => <PostCard post={post} />)
      }
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.postReducer.posts,
});

export default connect(mapStateToProps, null)(HomePage);