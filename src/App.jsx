// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Complaint from "./pages/Complaint";
import MainLayout from "./layout/MainLayout";
import Events from "./pages/Events";

export default function App() {
  return (
    <Routes>
      {/* Wrap all pages inside the main layout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HeroSection />} />
        <Route path="/complaint" element={<Complaint />} />
        <Route path="/events" element={<Events />} />
      </Route>
    </Routes>
  );
}
