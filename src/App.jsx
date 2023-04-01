import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Mugs from './pages/Mugs';

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/mugs">Mugs</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/about" element={<About />}>
        </Route>
        <Route path="/contact" element={<Contact />}>
        </Route>
        <Route path="/mugs" element={<Mugs />}>
        </Route>
        <Route path="/" element={<Home />}>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
