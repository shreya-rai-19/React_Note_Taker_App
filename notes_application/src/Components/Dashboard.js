import React, { useState } from 'react';
import GroupList from './GroupList';
import RightDashboard from './RightDashboard';
import '../styles/Dashboard.css';

const Dashboard = () => {

  const [selectedGroup, setSelectedGroup] = useState(null);

  const handleGroupSelect = (group) => {
    setSelectedGroup(group);
  };

  return (
    <div className="main">
      <div className="left">
        <GroupList onGroupSelect={handleGroupSelect} selectedGroup={selectedGroup}/>
      </div>
      <div className="right">
        <RightDashboard selectedGroup={selectedGroup}/>
      </div>
    </div>
  );
};

export default Dashboard;
