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
    const newGroup = { name: groupName, color: selectedColor};
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
    <>
    <h1 className="header2">Pocket Notes</h1>
    <div className="GroupList">  

    <div className="GrpLstbtn">
          <button className="btn_addgrp" onClick={openPopup}>
            <span className="plus">+</span>Create Notes group
          </button>
    </div>

    <div className="GrpLst">

      <ul>
        {groups.map((group, index) => (
          <li key={index}>
            <div
              className="group-disc"
              style={{ backgroundColor: group.color }}>
              {group.name[0]}{group.name[1].toUpperCase()}
            </div>
            <span className="group-name">{group.name}</span>
          </li>
        ))}
      </ul>

    </div>


      {isPopupVisible && <MenuPopup createGroup={createGroup} closePopup={closePopup} />}
    </div>
    </>
  );
};

export default GroupList;
