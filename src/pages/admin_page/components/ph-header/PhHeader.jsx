
import React from 'react';
import { FaBell, FaHome, FaUnity, FaUser } from 'react-icons/fa';
import NavBox from '../navbox/NavBox';
import "./ph-header.scss";

const PhHeader = () => {
  console.log("PhHeader called");
  return (
    <header className="ph-header">
      <FaUnity size='3rem' color='var(--color-text)' className='ph-header__title-icon' />
      <NavBox icon={FaHome} text='Phuongne' className='mr-auto' />
      <div className="user-nav">
        <NavBox icon={FaBell} onlyIcon />
        <NavBox icon={FaUser} text='Howdy, Phuong' textFirst />
      </div>
    </header>
  );
}

export default PhHeader;