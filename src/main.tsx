import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* 👇 basename must match your repo name */}
    <BrowserRouter basename="/Jeet-Portfolio">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
