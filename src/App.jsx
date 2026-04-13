import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdmissionChalo from "./pages/AdmissionChalo";
import IITMadrasPage from "./pages/IITMadrasPage";
import CollegeDetailPage from "./pages/CollegeDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdmissionChalo />} />
        <Route path="/iit-madras" element={<IITMadrasPage />} />
        <Route path="/college/:id" element={<CollegeDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;