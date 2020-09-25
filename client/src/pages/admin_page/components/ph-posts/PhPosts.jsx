import React from 'react';
import { Button } from '../../../../components/button/Button';
import styles from "./ph-posts.module.scss";
import { Table, TableBody, TableHead, TableRow, TableCell, TableHeader, TableItemRowHover } from '../../../../components/table/Table';
import { InlineList, InlineListItem, InlineListLink } from '../inline-list/InlineList';
import { useState } from 'react';
import { useCallback } from 'react';
import { connect } from "react-redux";

import { Link } from "react-router-dom";

const PhPosts = ({ posts }) => {
  const headers = ['Title', 'Author', 'Categories', 'Tags', 'Comments', 'Date', 'Internal Links']
  const [postType, setPostType] = useState('All');
  const clickCategory = useCallback((postType) => setPostType(postType), []);

  let all = posts.length;
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

  if (postType != 'All') {
    posts = posts.filter((p) => p.status == postType);
  }

  return (<div className={styles.phPosts}>
    <div className="d-flex mb-4">
      <h1 className="header-1 mr-2 pt-1">Posts</h1>
      <Button variant='primaryOutline'>Add New</Button>
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
                      <InlineListItem><Link to={`/ph-admin/posts/${post.id}`}>Edit</Link></InlineListItem>
                      <InlineListItem>View</InlineListItem>
                      <InlineListItem>Trash</InlineListItem>
                    </InlineList>
                  </TableItemRowHover>
                </TableCell>
                <TableCell>{post.author}</TableCell>
                <TableCell>{post.categories}</TableCell>
                <TableCell>{post.tags}</TableCell>
                <TableCell center>{post.comments}</TableCell>
                <TableCell>{`${post.date.status}`} <br /> {`${post.date.date}`}</TableCell>
                <TableCell center>{post.internalLinks}</TableCell>
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

export default connect(mapStateToProps, null)(PhPosts);