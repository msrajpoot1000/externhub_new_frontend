import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./NavbarTop.css";
import Logo from "./logo_ExternHu3.png";
function NavbarTop() {
  const navigate = useNavigate();
  return (
    <div className="navbarTop ">
      <div>manish</div>
      <Navbar
        className="navbarHead container"
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
          <span>ExternHub Solutions</span>
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
            <Nav.Link>Services</Nav.Link>
            <Nav.Link
              className="collapseItem"
              onClick={() => navigate("/verification")}
            >
              Verification
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default NavbarTop;
