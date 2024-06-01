import React from "react";
import { invoke } from "@tauri-apps/api/tauri";
import "../styles/control-panel.css";

const ControlPanel: React.FC = () => {
  const handleStart = () => {
    invoke('start_clock'); 
  }

  const handlePause = () => {
    invoke('pause_clock');
  }

  const handleReset = () => {
    invoke('reset_clock');
  }
  
  return (
    <div className="control-panel">
      <div onClick={handleStart}>Start</div>
      <div onClick={handlePause}>Pause</div>
      <div onClick={handleReset}>Reset</div>
    </div>
  );
}

export default ControlPanel;
