import React from 'react';
// import { Link } from "react-router-dom";
import { Button } from '../../../../components/button/Button';
import classes from "./ph-posts.module.scss";

const PhPosts = () => {
  return (<div>
    <div className="d-flex">
      <h1 className="header-1">Posts</h1>
      <Button variant='primaryOutline'>Add New</Button>
    </div>
    <ul className={classes.postCategories}>
      <li className={classes.postCategoriesItem}>
        <a href="/">All</a>
      </li>
      <li className={classes.postCategoriesItem}>
        <a href="/">Published</a>
      </li>
      <li className={classes.postCategoriesItem}>
        <a href="/">Drafts</a>
      </li>
      <li className={classes.postCategoriesItem}>
        <a href="/">Private</a>
      </li>
      <li className={classes.postCategoriesItem}>
        <a href="/">Trash</a>
      </li>
    </ul>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Categories</th>
          <th>Tags</th>
          <th>Stats</th>
          <th>Comments</th>
          <th>Date</th>
          <th>Internal Links</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Optimized: Giảm 75% thời gian Compile trong Unity</td>
          <td>Phuong</td>
          <td>Categories</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>2019/11/10 at 11:23AM</td>
          <td>1</td>
        </tr>
      </tbody>
    </table>
  </div>);
}

export default PhPosts;