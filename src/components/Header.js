import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header>
      <nav className="nav-bar">
        <ul>
          <li><a href="#about" smooth={true}>About</a></li>
          <li><a href="#experience" smooth={true}>Experience</a></li>
          <li><a href="#projects" smooth={true}>Projects</a></li>
          <li><a href="#certifications" smooth={true}>Certifications</a></li>
          <li><a href="#lens" smooth={true}>Lens</a></li>
          <li><a href="#contact" smooth={true}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
