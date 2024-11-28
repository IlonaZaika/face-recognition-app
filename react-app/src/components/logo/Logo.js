import React from "react";
import { Tilt } from "react-tilt";
import brain from "./icon-brain-100.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt"
        options={{ max: 50 }}
        style={{ height: 100, width: 100 }}
      >
        <div className="Tilt-inner">
          <img alt="logo" src={brain} />
        </div>
      </Tilt>
    </div>
  );
};

export default React.memo(Logo);
