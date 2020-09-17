import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { FaBookOpen, FaCommentAlt, FaCrown, FaCubes, FaPager, FaPhotoVideo } from 'react-icons/fa';
import NavBox from '../navbox/NavBox';
import './ph-sidenav.scss';

const PhSidenav = () => {

  return (
    <nav className="sidenav">
      <ul className="sidenav__nav">
        <li className="sidenav__item">
          <NavLink exact to="/ph-admin" className="sidenav__link" activeClassName="sidenav__link--active">
            <NavBox icon={FaCrown} text='Dashboard' variant="hoverPrimary" iconSize='1.4rem' />
          </NavLink>
        </li>
        <li className="sidenav__item">
          <NavLink exact to="/ph-admin/posts" className="sidenav__link" activeClassName="sidenav__link--active">
            <NavBox icon={FaBookOpen} text='Posts' variant="hoverPrimary" iconSize='1.4rem' />
          </NavLink>
        </li>
        <li className="sidenav__item">
          <a href="/" className="sidenav__link">
            <NavBox icon={FaPager} text='Pages' variant="hoverPrimary" iconSize='1.4rem' />
          </a>
        </li>
        <li className="sidenav__item">
          <a href="/" className="sidenav__link">
            <NavBox icon={FaPhotoVideo} text='Media' variant="hoverPrimary" iconSize='1.4rem' />
          </a>
        </li>
        <li className="sidenav__item">
          <a href="/" className="sidenav__link">
            <NavBox icon={FaCommentAlt} text='Comments' variant="hoverPrimary" iconSize='1.4rem' />
          </a>
        </li>
        <li className="sidenav__item">
          <a href="/" className="sidenav__link">
            <NavBox icon={FaCubes} text='Feedback' variant="hoverPrimary" iconSize='1.4rem' />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default PhSidenav;