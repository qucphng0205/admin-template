import React from 'react';
import './admin-page.scss';
import PhHeader from './components/ph-header/PhHeader';
import PhSidenav from './components/ph-sidebar/PhSidenav';
import PhMain from './components/ph-main/PhMain';

const AdminPage = () => {
  console.log("Admin Page called");
  return (
    <div className="ph-page">
      <PhSidenav />
      <div className="ph-content">
        <PhHeader />
        <div className="ph-body">
          <PhMain />
        </div>
      </div>
    </div>
  );
}

export default AdminPage;