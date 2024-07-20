import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import "../Index/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-md bg-body-blue-900 sticky-top">
        <div className="container-fluid">
          <div className="fs-2 logo">
            Pabitra's Portfolio
          </div>
          <div className={`options ${menuOpen ? 'active' : ''}`}>
            <Link to="/" className="link-item" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" className="link-item" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/service" className="link-item" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link to="/project" className="link-item" onClick={() => setMenuOpen(false)}>Project</Link>
            <Link to="/contact" className="link-item" onClick={() => setMenuOpen(false)}>Contact</Link>
           
          </div>
               <MenuIcon className="checkbtn" style={{marginRight:"70px"}}  onClick={handleMenuToggle} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
