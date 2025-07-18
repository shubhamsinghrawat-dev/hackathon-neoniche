import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import '../../assets/css/nav.css';
import { Button } from 'react-bootstrap';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => setIsOpen(!isOpen);
  const closeMobileMenu = () => setIsOpen(false);

  const getLinkClass = (hash) => {
    return location.hash === hash ? 'nav-link active' : 'nav-link';
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-content">
          <ul className="nav-links desktop">
            <li><Link smooth to="/#about" className={getLinkClass('#about')}>About</Link></li>
            <li><Link smooth to="/#register" className={getLinkClass('#register')}>Who Should Register</Link></li>
            <li><Link smooth to="/#rules" className={getLinkClass('#rules')}>Hackathon Rules</Link></li>
            <li><Link smooth to="/#rewards" className={getLinkClass('#rewards')}>Rewards</Link></li>
            <li><Link smooth to="/#jury" className={getLinkClass('#jury')}>Jury</Link></li>
            <li><Link smooth to="/#upload" className={getLinkClass('#upload')}>Upload</Link></li>
            <li>
              <a href="https://www.neoniche.com/contact" target="_blank" rel="noreferrer" className="nav-link">Contact</a>
            </li>
            <li><Button className="btn-register btn-sm">Register Now!</Button></li>
          </ul>
          <div className="menu-toggle mobile" onClick={toggleMobileMenu}>
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </div>
        </div>
      </nav>

      <MobileMenu isOpen={isOpen} closeMenu={closeMobileMenu} />
    </>
  );
};

export default Navbar;
