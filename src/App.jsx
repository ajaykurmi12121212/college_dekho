import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdmissionChalo from "./pages/AdmissionChalo";
import IITMadrasPage from "./pages/IITMadrasPage";
import GLBajajPage from "./pages/GLBajajPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdmissionChalo />} />
        <Route path="/iit-madras" element={<IITMadrasPage />} />
        <Route path="/gl-bajaj" element={<GLBajajPage/>} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;