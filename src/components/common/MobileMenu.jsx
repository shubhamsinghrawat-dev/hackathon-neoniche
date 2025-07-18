import React from 'react';
import { Button } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';

const MobileMenu = ({ isOpen, closeMenu }) => {
  return (
    <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={closeMenu}>&times;</button>
      <ul className="mobile-nav-links">
        <li><Link to="/#about" onClick={closeMenu}>About</Link></li>
        <li><Link to="/#register" onClick={closeMenu}>Who Should Register</Link></li>
        <li><Link to="/#rules" onClick={closeMenu}>Hackathon Rules</Link></li>
        <li><Link to="/#rewards" onClick={closeMenu}>Rewards</Link></li>
        <li><Link to="/#jury" onClick={closeMenu}>Jury</Link></li>
        <li><Link to="/#upload" onClick={closeMenu}>Upload</Link></li>
        <li>
          <a
            href="https://www.neoniche.com/contact"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </a>
        </li>
        <li><Button className="btn-register btn-sm">Register Now!</Button></li>
        
      </ul>
    </div>
  );
};

export default MobileMenu;
