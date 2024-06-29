import React, { useState } from "react";
import "./Navbar2.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="navbar2">
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">BrandName</div>
          <ul className={isMobile ? "navbar-links active" : "navbar-links"}>
            <li className="navbar-item">
              <a href="#">Home</a>
            </li>
            <li className="navbar-item">
              <a href="#">About</a>
            </li>
            <li className="navbar-item dropdown">
              <a href="#" className="dropdown-toggle">
                Services
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">Service 1</a>
                </li>
                <li>
                  <a href="#">Service 2</a>
                </li>
                <li>
                  <a href="#">Service 3</a>
                </li>
              </ul>
            </li>
            <li className="navbar-item">
              <a href="#">Contact</a>
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
