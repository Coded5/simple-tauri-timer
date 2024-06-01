import React from "react";
import ReactDOM from "react-dom/client";
import Timer from './Timer.tsx';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Timer />
  </React.StrictMode>,
);
