import React from 'react';
import styles from "./ph-comments.module.scss";
import { Table, TableBody, TableHead, TableRow, TableCell, TableHeader, TableItemRowHover } from '../../../../components/table/Table';
import { InlineList, InlineListItem, InlineListLink } from '../inline-list/InlineList';
import { useState } from 'react';
import { useCallback } from 'react';
import { connect } from "react-redux";

import { act_ApproveComment, act_DeleteComment, act_RestoreComment, act_TrashComment, act_UnapproveComment } from '../../../../redux/comment/comment.action';

const PhComments = ({ comments, approveComment, unapproveComment, restoreComment, deleteComment, trashComment }) => {
  const headers = ['Author', 'Comment', 'Post', 'Submitted on']
  const [commentType, setCommentType] = useState('All');
  const clickCategory = useCallback((commentType) => setCommentType(commentType), []);

  const clickApprove = useCallback((comment) => approveComment(comment), []);
  const clickUnapprove = useCallback((comment) => unapproveComment(comment), []);
  const clickRestore = useCallback((comment) => restoreComment(comment), []);
  const clickDelete = useCallback((comment) => deleteComment(comment), []);
  const clickTrash = useCallback((comment) => trashComment(comment), []);

  let all = 0;
  let mine = 0;
  let pending = 0;
  let approved = 0;
  let trash = 0;

  comments.forEach((value) => {
    if (value.author.email === 'phuongle0205@gmail.com')
      ++mine;
    if (value.status === 'Pending')
      ++pending;
    else if (value.status === 'Approved')
      ++approved;
    else if (value.status === 'Trash')
      ++trash;
  });

  all = pending + approved;
  if (commentType === 'Mine') {
    comments = comments.filter((p) => p.author.email === 'phuongle0205@gmail.com');
  } else if (commentType != 'All') {
    comments = comments.filter((p) => p.status == commentType);
  } else
    comments = comments.filter((p) => p.status != 'Trash');

  return (<div className={styles.phComments}>
    <h1 className="header-1 mr-2 pt-1">Comments</h1>

    <InlineList className='mb-2'>
      <InlineListItem><InlineListLink onClick={() => clickCategory('All')}>All ({all})</InlineListLink></InlineListItem>
      <InlineListItem><InlineListLink onClick={() => clickCategory('Mine')}>Mine ({mine})</InlineListLink></InlineListItem>
      <InlineListItem><InlineListLink onClick={() => clickCategory('Pending')}>Pending ({pending})</InlineListLink></InlineListItem>
      <InlineListItem><InlineListLink onClick={() => clickCategory('Approved')}>Approved ({approved})</InlineListLink></InlineListItem>
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
          comments.map((comment, ind) => {
            return (
              <TableRow key={ind}>
                <TableCell className={styles.tableCell}>
                  <span>{comment.author.name}</span>
                  <TableItemRowHover>
                    <InlineList>
                      {commentType !== 'Trash' ?
                        <React.Fragment>
                          {
                            comment.status === 'Approved' ?
                              <InlineListItem><span className={styles.fakeLink} onClick={(_) => clickUnapprove(comment)}>Unapproved</span></InlineListItem> :
                              <InlineListItem><span className={styles.fakeLink} onClick={(_) => clickApprove(comment)}>Approved</span></InlineListItem>
                          }
                          <InlineListItem><span className={styles.fakeLink} onClick={(_) => clickTrash(comment)}>Trash</span></InlineListItem>
                          <InlineListItem>View</InlineListItem>
                        </React.Fragment> :
                        <React.Fragment>
                          <InlineListItem><span className={styles.fakeLink} onClick={(_) => clickRestore(comment)}>Restore</span></InlineListItem>
                          <InlineListItem><span className={styles.fakeLink} onClick={(_) => clickDelete(comment)}>Delemete Permernantly</span></InlineListItem>
                        </React.Fragment>
                      }
                    </InlineList>
                  </TableItemRowHover>
                </TableCell>
                <TableCell>{comment.content}</TableCell>
                <TableCell>{comment.post}</TableCell>
                <TableCell>{comment.date}</TableCell>
              </TableRow>
            );
          })
        }
      </TableBody>
    </Table>
  </div>);
}

const mapStateToProps = (state) => ({
  comments: state.commentReducer.comments,
});

const mapDispatchToProps = (dispatch) => ({
  trashComment: (comment) => dispatch(act_TrashComment(comment)),
  restoreComment: (comment) => dispatch(act_RestoreComment(comment)),
  deleteComment: (comment) => dispatch(act_DeleteComment(comment)),
  approveComment: (comment) => dispatch(act_ApproveComment(comment)),
  unapproveComment: (comment) => dispatch(act_UnapproveComment(comment)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhComments);