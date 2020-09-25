import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import PhTextEditor from '../ph-text-editor/PhTextEditor';
import { act_EditPost } from '../../../../redux/post/post.action';

const PhPostEditor = ({ posts, match, savePost }) => {
  const postId = parseInt(match.params.id);
  const post = posts.filter((post) => post.id === postId)[0];
  // console.log(post);
  const onSave = useCallback((content) => { post.content = content; savePost(post); }, []);

  return (<div>
    <PhTextEditor content={post.content} onSave={onSave} />
  </div>);
}

const mapStateToProps = (state) => ({
  posts: state.postReducer.posts,
});

const mapDispatchToProps = (dispatch) => ({
  savePost: (post) => dispatch(act_EditPost(post)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PhPostEditor);