import React, { useState } from 'react';
import GroupList from './GroupList';
import RightDashboard from './RightDashboard';
import '../styles/Dashboard.css';

const Dashboard = () => {

  const [selectedGroup, setSelectedGroup] = useState(null);

  const [mobileView, setMobileView] = useState(false);

  const handleGroupSelect = (group) => {
    setSelectedGroup(group);
    setMobileView(true); // Set mobileView to true when a group is selected
  };

  const handleBackToGroupList = () => {
    setSelectedGroup(null);
    setMobileView(false); // Set mobileView to false to show the GroupList again
  };
  // const handleGroupSelect = (group) => {
  //   setSelectedGroup(group);
  // };

  // const handleBackToGroupList = () => {
  //   setSelectedGroup(null);
  // };

  return (
    <div className="main">
      {/* <div className={`left ${selectedGroup ? 'hidden' : ''}`}> */}
      <div className={`left ${mobileView ? 'hidden' : ''}`}>
        <GroupList onGroupSelect={handleGroupSelect} selectedGroup={selectedGroup}/>
      </div>
      <div className={`right ${selectedGroup ? 'visible' : ''}`}>
        <RightDashboard selectedGroup={selectedGroup} onBackToGroupList={handleBackToGroupList} />
      </div>
      
    </div>
  );
};

export default Dashboard;
