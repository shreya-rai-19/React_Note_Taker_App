import React from "react";
import "../styles/Right_Dashboard.css";
import dashbd from "../assets/dashbd.png";
import lockimg from "../assets/lock.png";

const RightDashboard = () => {
  return (
    <div className="RightSection">
      {/* -------------------DEAFAULT PAGE--------------------------------- */}

      <img className="image1" src={dashbd} alt="dashbd image" />

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

      {/* -------------------DEAFULT PAGE--------------------------------- */}
    </div>
  );
};

export default RightDashboard;
