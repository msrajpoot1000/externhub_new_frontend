import React, { useState } from "react";
import "./Navbar2.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="navbar2">
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">ExternHub Solutions</div>
          <ul className={isMobile ? "navbar-links active" : "navbar-links"}>
            <li className="navbar-item">
              <button href="#">Home</button>
            </li>
            <li className="navbar-item">
              <button href="#">About</button>
            </li>
            <li className="navbar-item dropdown">
              <button href="#" className="dropdown-toggle">
                Services
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button href="#">Internship</button>
                </li>
                <li>
                  <button href="#">Development Services</button>
                </li>
              </ul>
            </li>
            <li className="navbar-item">
              <button href="#">Contact</button>
            </li>
          </ul>
          <div className="navbar-toggle" onClick={() => setIsMobile(!isMobile)}>
            &#9776;
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
