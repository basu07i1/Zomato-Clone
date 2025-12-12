import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx'; 
import Error from './components/Error.jsx';
import HelpDesk from './components/HelpDesk.jsx';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/helpDesk" element={<HelpDesk />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;