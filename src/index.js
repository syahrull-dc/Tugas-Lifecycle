import React from "react";
import ReactDOM from "react-dom/client"; // Perbaikan: gunakan createRoot
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // Perbaikan: gunakan createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
