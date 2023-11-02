import React, { useState, useEffect } from 'react';
import "../styles/Notes.css";
import entericon from "../assets/Enter_Icon.png";

const Notes = ({ selectedGroup }) => {
  const [newNote, setNewNote] = useState('');
  const [notesByGroup, setNotesByGroup] = useState({});


  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem(`notes_${selectedGroup.name}`)) || [];

    setNotesByGroup((prevNotesByGroup) => {
      return {
        ...prevNotesByGroup,
        [selectedGroup.name]: storedNotes,
      };
    });
  }, [selectedGroup]);


  const formatDateTime = (timestampISO) => {
    const timestamp = new Date(timestampISO);
  
    const optionsTime = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    };
    const timeString = new Intl.DateTimeFormat('en-US', optionsTime).format(timestamp);
  
    const optionsDate = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };
    const dateString = new Intl.DateTimeFormat('en-US', optionsDate).format(timestamp);
  
    return `${timeString}  ${dateString}`;
  };

  const handleAddNote = () => {
    if (newNote) {
      const isoTimestamp = new Date(Date.now());
      const formattedDateTime = formatDateTime(isoTimestamp);
      const newNoteItem = { text: newNote, formatDateTime:formattedDateTime };
      
      setNotesByGroup((prevNotesByGroup) => {
        const currentNotes = notesByGroup[selectedGroup.name] || [];
        const notesForSelectedGroup = [...currentNotes, newNoteItem];
        localStorage.setItem(`notes_${selectedGroup.name}`, JSON.stringify(notesForSelectedGroup));
        return {
          ...prevNotesByGroup,
          [selectedGroup.name]: notesForSelectedGroup,
        };
      });

      setNewNote('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddNote(); // Call the handleAddNote function when Enter key is pressed
    }
  };

  const notes = notesByGroup[selectedGroup.name] || [];

  return (
    <div className="notes">

      <ul className="notes_list">
      {notes && notes.length > 0 ? (
        notes.map((note, index) => (
          <li key={index}
          className='notes_names'>
            <p className='date_time'>{note.formatDateTime}</p>
            <p className='note_content'>{note.text}</p>
          </li>
        ))
        ): (
          <li>No Notes avaiable</li>
        )}
      </ul>

      <div className="add-note">
        
        <div className='text_area'>
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter your text here..........."
        />
        <div className='button_add'>
        <button onClick={handleAddNote} className="enter_btn">
            <img src={entericon} alt="entericon" />
        </button>
        </div>

        </div>
      </div>

    </div>
  );
};

export default Notes;

