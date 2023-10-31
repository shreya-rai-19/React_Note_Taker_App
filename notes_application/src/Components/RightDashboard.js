import React from "react";
import "../styles/Right_Dashboard.css";
import dashbd from "../assets/dashbd.png";
import lockimg from "../assets/lock.png";

const RightDashboard = ({ selectedGroup }) => {
  return (
    <div className="RightSection">
      {selectedGroup ? (
        <div>
          <h2>Notes for {selectedGroup.name}</h2>
          {/* <ul>
            {selectedGroup.notes.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul> */}
          {/* Add functionality to add new notes */}
        </div>
      ) : (
        <div>
          <img className="image1" src={dashbd} alt="dashbdimage" />

          <div className="heading1">
            <h3 className="heading1">Pocket Notes</h3>
          </div>

          <div className="para1">
            <p className="para1">
              Send and receive messages without keeping your phone online. Use
              Pocket Notes on up to 4 linked devices and 1 mobile phone
            </p>
          </div>

          <div className="safety">
            <img className="lockimg" src={lockimg} alt="lockimage" />
            <p className="safetypara">end-to-end encrypted</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RightDashboard;
