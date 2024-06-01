import React from "react";
import "./styles/main.css";
import Clock from "./components/clock";
import ControlPanel from "./components/control-panel";

const Timer: React.FC = () => {
  return (
    <div className="study-tracker">
      <div className="tracker-container">
        <Clock />
        <ControlPanel />
      </div>
    </div>
  );
}

export default Timer;
