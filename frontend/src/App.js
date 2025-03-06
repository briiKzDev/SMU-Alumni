import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AlumniDashboard from './Pages/Alumni/AlumniDashboard';
import AlumniInformation from './Pages/Alumni/AlumniInformation';
import StudentInformation from './Pages/Alumni/StudentInformation';

function App() {
  return (
   
    <Router>
      <Routes>
        <Route path="/" element={<AlumniDashboard />} />
        <Route path="/AlumniInformation" element={<AlumniInformation />} />
        <Route path="/StudentInformation" element={<StudentInformation />} />
      </Routes>
    </Router>
  );
}

export default App;