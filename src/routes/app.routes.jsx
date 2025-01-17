import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from '../pages/Home';
import { About } from '../pages/About';
import { Nav } from '../components/nav';
import { ExperiencePage } from '../pages/Experience';


export function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<ExperiencePage />} />
      </Routes>
    </Router>
  );
}
