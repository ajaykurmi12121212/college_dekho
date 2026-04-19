import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdmissionChalo from "./pages/AdmissionChalo";
import IITMadrasPage from "./pages/IITMadrasPage";
import CollegeDetailPage from "./pages/CollegeDetailPage";
import CoursesPage from "./pages/CoursesPage";
import CourseDetailPage from "./pages/CourseDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdmissionChalo />} />
        <Route path="/iit-madras" element={<IITMadrasPage />} />
        <Route path="/college/:id" element={<CollegeDetailPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:stream" element={<CoursesPage />} />
        <Route path="/course/:courseId" element={<CourseDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;