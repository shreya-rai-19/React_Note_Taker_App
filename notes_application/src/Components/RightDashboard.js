import React from "react";
import "../styles/Right_Dashboard.css";
import Notes from "./Notes";
import dashbd from "../assets/dashbd.png";
import lockimg from "../assets/lock.png";
import backbtn from "../assets/Back_btn.png";

const RightDashboard = ({ selectedGroup, onBackToGroupList }) => {
  return (
    <div className="RightSection">
      {selectedGroup ? (
        <div>
          <div className="group-details">
            <div
              className="group-disc"
              style={{ backgroundColor: selectedGroup.color }}
            >
              {selectedGroup.name[0]}
              {selectedGroup.name[1].toUpperCase()}
            </div>
            <div className="group-name">{selectedGroup.name}</div>
            {window.innerWidth <= 768 && (
              <button className="back-button" onClick={onBackToGroupList}>
                <img src={backbtn} alt="back-button" />
              </button>
            )}
          </div>

          <Notes selectedGroup={selectedGroup} />
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
