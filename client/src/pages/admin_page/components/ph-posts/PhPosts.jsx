import React from 'react';
import { Button } from '../../../../components/button/Button';
import styles from "./ph-posts.module.scss";
import { Table, TableBody, TableHead, TableRow, TableCell, TableHeader, TableItemRowHover } from '../../../../components/table/Table';
import { InlineList, InlineListItem, InlineListLink } from '../inline-list/InlineList';
import { useState } from 'react';
import { useCallback } from 'react';
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { act_DeletePermenantlyPost, act_RestorePost, act_TrashPost } from '../../../../redux/post/post.action';

const PhPosts = ({ posts, toTrash, restorePost, deletePost }) => {
  const headers = ['Title', 'Author', 'Comments', 'Date']
  const [postType, setPostType] = useState('All');
  const clickCategory = useCallback((postType) => setPostType(postType), []);
  const clickTrash = useCallback((post) => toTrash(post), []);
  const clickRestore = useCallback((post) => restorePost(post), []);
  const clickDelete = useCallback((post) => deletePost(post), []);

  let all = 0;
  let published = 0;
  let drafts = 0;
  let trash = 0;

  posts.forEach((value) => {
    if (value.status === 'Trash')
      ++trash;
    else if (value.status === 'Published')
      ++published;
    else if (value.status === 'Draft')
      ++drafts;
  });

  all = published + drafts;

  if (postType != 'All') {
    posts = posts.filter((p) => p.status == postType);
  } else
    posts = posts.filter((p) => p.status != 'Trash');

  return (<div className={styles.phPosts}>
    <div className="d-flex mb-4">
      <h1 className="header-1 mr-2 pt-1">Posts</h1>
      <Button variant='primaryOutline'><Link className={styles.resetLinkStyle} to={`/ph-admin/posts/add-new`}>Add New</Link></Button>
    </div>

    <InlineList className='mb-2'>
      <InlineListItem><InlineListLink onClick={() => clickCategory('All')}>All ({all})</InlineListLink></InlineListItem>
      <InlineListItem><InlineListLink onClick={() => clickCategory('Published')}>Published ({published})</InlineListLink></InlineListItem>
      <InlineListItem><InlineListLink onClick={() => clickCategory('Draft')}>Drafts ({drafts})</InlineListLink></InlineListItem>
      <InlineListItem><InlineListLink onClick={() => clickCategory('Trash')}>Trash ({trash})</InlineListLink></InlineListItem>
    </InlineList>

    <Table>
      <TableHeader>
        <tr>
          {
            headers.map((header, idx) => <TableHead key={idx}>{header}</TableHead>)
          }
        </tr>
      </TableHeader>
      <TableBody>
        {
          posts.map((post, ind) => {
            return (
              <TableRow key={ind}>
                <TableCell className={styles.tableCell}>
                  <span>{post.title}</span>
                  <TableItemRowHover>
                    <InlineList>
                      {postType != 'Trash' ?
                        <React.Fragment>
                          <InlineListItem><Link to={`/ph-admin/posts/${post.id}`}>Edit</Link></InlineListItem>
                          <InlineListItem>View</InlineListItem>
                          <InlineListItem><span className={styles.fakeLink} onClick={(_) => clickTrash(post)}>Trash</span></InlineListItem>
                        </React.Fragment> :
                        <React.Fragment>
                          <InlineListItem><span className={styles.fakeLink} onClick={(_) => clickRestore(post)}>Restore</span></InlineListItem>
                          <InlineListItem><span className={styles.fakeLink} onClick={(_) => clickDelete(post)}>Delemete Permernantly</span></InlineListItem>
                        </React.Fragment>
                      }
                    </InlineList>
                  </TableItemRowHover>
                </TableCell>
                <TableCell>{post.author}</TableCell>
                <TableCell center>{post.comments}</TableCell>
                <TableCell>{`${post.date}`}</TableCell>
              </TableRow>
            );
          })
        }
      </TableBody>
    </Table>
  </div>);
}

const mapStateToProps = (state) => ({
  posts: state.postReducer.posts,
});

const mapDispatchToProps = (dispatch) => ({
  toTrash: (post) => dispatch(act_TrashPost(post)),
  restorePost: (post) => dispatch(act_RestorePost(post)),
  deletePost: (post) => dispatch(act_DeletePermenantlyPost(post)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhPosts);