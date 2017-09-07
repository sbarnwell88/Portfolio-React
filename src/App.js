import React, { Component } from 'react';
import Name from './components/Name';
import Intro from './components/Intro';
import { NavBarComponent } from './styles/NavBar';
import Projects from './components/Projects';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div>
         <NavBarComponent>
          <div><a href="#home">Home</a></div>
          <div><a href="#about">About</a></div>
          <div><a href="#portfolio">Portfolio</a></div>
          <div><a href="#contact">Contact Me</a></div>
        </NavBarComponent> 
          <Name />
          <Intro />
          <Projects />
          <Contact />
      </div>
    );
  }
}

export default App;
