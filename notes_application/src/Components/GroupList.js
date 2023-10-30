import React, { useState, useEffect } from 'react';
import MenuPopup from './MenuPopup';
import '../styles/GroupList.css';

const GroupList = () => {
  const [groups, setGroups] = useState([]);
  const [isPopupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    const storedGroups = JSON.parse(localStorage.getItem('groups')) || [];
    setGroups(storedGroups);
  }, []);

  const createGroup = (groupName, selectedColor) => {
    const newGroup = { name: groupName, color: selectedColor };
    const updatedGroups = [...groups, newGroup];
    setGroups(updatedGroups);
    localStorage.setItem('groups', JSON.stringify(updatedGroups));
  };

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="group-list">
      <h2>List of Groups</h2>
      <ul>
        {groups.map((group, index) => (
          <li key={index} style={{ backgroundColor: group.color }}>
            <div className="group-icon"></div>
            {group.name}
          </li>
        ))}
      </ul>
      <button onClick={openPopup}>Create Group</button>
      {isPopupVisible && <MenuPopup createGroup={createGroup} closePopup={closePopup} />}
    </div>
  );
};

export default GroupList;
