import React, { useRef, useState, useEffect } from "react";
import "./FrontView.css";
import Back from "./images/back12.png";
import "../../Navbar/NavbarTop.css";
import { Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Logo from "../../Navbar/logo_ExternHu3.png";
import Navbar2 from "./Navbar2";
function FrontView() {
  const navigate = useNavigate();
  const divRef = useRef(null);
  const [divHeight, setDivHeight] = useState(0);
  useEffect(() => {
    if (divRef.current) {
      // Get the height of the div when the component mounts
      const height = divRef.current.clientHeight;
      setDivHeight(height + 120);
      console.log(height);
    }
  }, []);

  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight * 2, // Scroll down by 150vh
      behavior: "smooth", // Smooth scrolling behavior
    });
  };

  return (
    <div className="topHead">
      <div>{/* <Navbar2 /> */}</div>

      <div className="frontViewHead">
        <div className=" container">
          <div className="navbarTop">
            <Navbar
              className="navbarHead "
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
                  <Nav.Link
                    className="collapseItem "
                    onClick={() => navigate("/")}
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    className="collapseItem "
                    onClick={() => navigate("/contact-us")}
                  >
                    Contact Us
                  </Nav.Link>
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
          {/* <div className="frontViewHead " ref={divRef}>
            <h1 data-aos="fade-up" className="unlock">
              Unlock Your Future With ExternHub{" "}
            </h1>
            <h3 data-aos="fade-up">Explore </h3>
            <h3 data-aos="fade-up">Exciting Internship</h3>
            <h3 data-aos="fade-up"> Opportunities</h3>
            <h6 data-aos="fade-up" className="start">
              Start your internship journey with us, focused on your dreams.
              Join now to pursue your career goals.
            </h6>
            <div className="getStartedHead">
              <button className="getStarted" onClick={handleScroll}>
                GET STARTED
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
export default FrontView;
