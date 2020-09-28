import React, { useCallback, useMemo, useState } from 'react';
import { connect } from 'react-redux';
import PhTextEditor from '../ph-text-editor/PhTextEditor';
import { act_SavePost } from '../../../../redux/post/post.action';
import { Redirect } from 'react-router-dom';




const PhPostEditor = ({ posts, match, savePost, history }) => {
  console.log('PhPostEditor re-render');
  const [postCount, setPostCount] = useState(posts.length);

  console.log('PhPostEditor re-render 2');
  const post = useMemo(() => {
    if (match.params.id != null) {
      const postId = parseInt(match.params.id);
      return posts.filter((post) => post.id === postId)[0];
    } else {
      return {
        title: 'New post title',
        author: "Phuong",
        comments: 0,
        date: Date.now(),
        status: "Published",
        content: "",
      };
    }
  }, [])

  console.log('CONTENT: ');
  console.log(post);

  const onSave = useCallback((content) => {
    post.content = content;
    post.date = Date.now().toString();
    savePost(post);
  }, []);
  if (postCount < posts.length)
    return <div> <Redirect to={`/ph-admin/posts/${posts[posts.length - 1].id}`} /> </div>
  else return (<div>
    <PhTextEditor content={post.content} onSave={onSave} />
  </div>);
}

const mapStateToProps = (state) => ({
  posts: state.postReducer.posts,
});

const mapDispatchToProps = (dispatch) => ({
  savePost: (post) => dispatch(act_SavePost(post)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PhPostEditor);