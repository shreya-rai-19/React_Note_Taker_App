import React, { useState } from "react";
import GroupList from "./GroupList";
import RightDashboard from "./RightDashboard";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [selectedGroup, setSelectedGroup] = useState(null);

  const [mobileView, setMobileView] = useState(false);

  const handleGroupSelect = (group) => {
    setSelectedGroup(group);
    setMobileView(true);
  };

  const handleBackToGroupList = () => {
    setSelectedGroup(null);
    setMobileView(false);
  };

  return (
    <div className="main">
      <div className={`left ${mobileView ? "hidden" : ""}`}>
        <GroupList
          onGroupSelect={handleGroupSelect}
          selectedGroup={selectedGroup}
        />
      </div>
      <div className={`right ${selectedGroup ? "visible" : ""}`}>
        <RightDashboard
          selectedGroup={selectedGroup}
          onBackToGroupList={handleBackToGroupList}
        />
      </div>
    </div>
  );
};

export default Dashboard;
