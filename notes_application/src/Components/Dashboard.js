import React from 'react';
import GroupList from './GroupList';
import RightDashboard from './RightDashboard';
import '../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="main">
      <div className="left">
        <GroupList />
      </div>
      <div className="right">
        <RightDashboard />
      </div>
    </div>
  );
};

export default Dashboard;
