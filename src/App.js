import React from 'react';
import AboutMe from './components/AboutMe/AboutMe';
import NavBar from './components/NavBar/NavBar';
import MyProjects from './components/MyProjects/MyProjects';
import MySkills from './components/MySkills/MySkills';
import PoR from './components/PoR/PoR';
import ContactMe from './components/ContactMe/ContactMe';

function App() {
  return (
    <>
      <NavBar />
      <AboutMe />
      <MyProjects />
      <MySkills />
      <PoR />
      <ContactMe />
    </>
  );
}

export default App;
