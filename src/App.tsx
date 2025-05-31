import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.js";
import Settings from "./pages/Settings.js";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}
