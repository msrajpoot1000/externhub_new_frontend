import React from "react";
import { Navbar, Nav, NavLink } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Logo from "../../Navbar/logo_ExternHu3.png";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThan } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./FrontView2.css";
function FrontView2() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <Navbar
        className="navbarHead"
        style={{ backgroundColor: "transparent" }}
        expand="lg"
      >
        <Navbar.Brand
          className="navbarHeading navHeading"
          onClick={() => navigate("/")}
        >
          <img
            data-aos="fade-right"
            className="logoImg"
            src={Logo}
            alt="externHub"
          />
          <span>ExternHub</span>
          <span className="solutions">&nbsp; Solutions</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="toggleBtn"
          style={{ color: "white" }}
        />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-end navbarCollapse"
        >
          <Nav className="ml-auto HomePageLink">
            <Nav.Link className="collapseItem " onClick={() => navigate("/")}>
              Home
            </Nav.Link>
            <Nav.Link
              className="collapseItem "
              onClick={() => navigate("/contact-us")}
            >
              Contact Us
            </Nav.Link>

            <NavDropdown
              title="Services"
              id="basic-nav-dropdown"
              className="dropdownHead"
            >
              <div className="dropContent">
                <NavDropdown.Item className="devBtn dropItem">
                  Development Services
                </NavDropdown.Item>
                <NavDropdown.Item className="dropItem devItems">
                  <ul>
                    <li>
                      <FontAwesomeIcon
                        icon={faLessThan}
                        className="leftArrow"
                      />
                      Web Development
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faLessThan}
                        className="leftArrow"
                      />
                      App Development
                    </li>
                  </ul>
                </NavDropdown.Item>
                <NavDropdown.Item className="intenBtn dropItem intenshipBtn">
                  Internship
                </NavDropdown.Item>
                <NavDropdown.Item className="dropItem intenshipItems">
                  <ul>
                    <li>
                      <FontAwesomeIcon
                        icon={faLessThan}
                        className="leftArrow"
                      />
                      MERN Stack
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faLessThan}
                        className="leftArrow"
                      />
                      App Development
                    </li>
                  </ul>
                </NavDropdown.Item>
              </div>
            </NavDropdown>
            <Nav.Link
              className="collapseItem "
              onClick={() => navigate("/contact-us")}
            >
              About Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default FrontView2;
