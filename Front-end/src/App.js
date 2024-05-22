// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About, Projects, Skills, Contact } from './Home';
import Navbar from './Navbar';
import Footer from './Footer';


const Home = () => {
  return (
    <div>
      <About />
      <Skills />
      <Projects />
      <Contact/>
    </div>
  );
};

function App() {
  return (
    <Router>
            <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
      <Footer/>

    </Router>
  );
}

export default App;
