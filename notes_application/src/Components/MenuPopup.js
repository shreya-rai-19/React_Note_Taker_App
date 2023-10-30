import React, { useState, useRef, useEffect } from 'react';
import '../styles/MenuPopup.css';

const MenuPopup = ({ createGroup, closePopup }) => {
  const [groupName, setGroupName] = useState('');
  const [selectedColor, setSelectedColor] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const popupRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        closePopup();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closePopup]);

  const colors = [
    '#B38BFA',
    '#FF79F2',
    '#43E6FC',
    '#F19576',
    '#0047FF',
    '#6691FF',
  ];

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleCreateGroup = () => {
    if (groupName && selectedColor) {
      createGroup(groupName, selectedColor);
      setGroupName('');
      setSelectedColor(null);
      closePopup();
    } else {
      setErrorMessage('Please enter both Group Name and choose a color.');
    }
  };

  return (
    <div className="GroupPopup" ref={popupRef}>
      <label className="grp-header">Create New Notes Group</label>
      <br />
      <label className="create-header">Group Name</label>
      <input
        className="input-grp"
        type="text"
        placeholder="Enter your group name...."
        value={groupName}
        onChange={(e) => setGroupName(e.target.value)}
      />
      <div className="color-options">
        <label className="create-header">Choose Color</label>
        {colors.map((color) => (
          <div
            key={color}
            className={`color-option ${selectedColor === color ? 'selected' : ''}`}
            style={{ backgroundColor: color }}
            onClick={() => handleColorClick(color)}
          ></div>
        ))}
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <button className="create-btn" onClick={handleCreateGroup}>
        Create
      </button>
    </div>
  );
};

export default MenuPopup;
