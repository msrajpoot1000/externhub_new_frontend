import { useEffect, useState, useContext } from "react";
import "./AdminDashBoard.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserContext } from "../../../UserContext";

import Dropdown from "react-bootstrap/Dropdown";
import {
  faHome,
  faUser,
  faUserPlus,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate, Route, Routes } from "react-router-dom";

import Home from "./Components/Home/Home";
import ContactUs from "./Components/ContactUs/ContactUs";
import RegistrationStatus from "./Components/RegistrationStatus/RegistrationStatus";

function AdminDashBoard() {
  const { token } = useContext(UserContext);
  const navigate = useNavigate();
  const [processing, setProcessing] = useState();
  const [widthOfScreen, setWidthOfScreen] = useState(window.innerWidth);
  const [widthOfNav, setwidthOfNav] = useState(
    widthOfScreen < 800 ? "0%" : "20%"
  );
  const toggleNavWidth = () => {
    setwidthOfNav(
      widthOfNav === "0%" ? (widthOfScreen < 800 ? "80%" : "20%") : "0%"
    );
  };

  useEffect(() => {
    console.log(token);
  }, []);

  useEffect(() => {
    setwidthOfNav(widthOfScreen < 800 ? "0%" : "20%");
  }, [widthOfScreen]);
  const [currentPageName, setCurrentPageName] = useState("Home");

  useEffect(() => {
    function handleResize() {
      setWidthOfScreen(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = (route, currentPageName) => {
    navigate(route);
    setwidthOfNav(widthOfScreen < 800 ? "0%" : "");
    setCurrentPageName(currentPageName);
  };
  return (
    <div>
      {/* style={{ opacity: processing ? "1" : "0.7" }} */}
      {/* <h1>Admin dashboard</h1> */}
      <div className="dashboard">
        <div className="navbarSection">
          <div className="toggleButton navSecton1" onClick={toggleNavWidth}>
            <p className="line"> </p>
            <p className="line"></p>
            <p className="line"></p>
          </div>
          <div className="navSection2">
            <div className="navLeft">
              <p className="home">{currentPageName}</p>
            </div>
            <div className="navRight">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "0rem 0.2rem",
                }}
              ></div>
              <div>
                <Dropdown>
                  <Dropdown.Toggle className="custom-toggle">
                    <FontAwesomeIcon
                      icon={faUser}
                      style={{ color: "white", paddingRight: "0.3rem" }}
                    />
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="custom-toogle-body">
                    <p>your id : </p>
                    <div>
                      <p>Name Of Cafe : </p>
                    </div>
                    <div className="control-login">
                      <p className="loggP">Logged in as</p>
                      <div>
                        <div className="custom-toogle-body-img">
                          {/* <img className="acc" src={Account} alt="Account" /> */}
                          <FontAwesomeIcon
                            icon={faUser}
                            className="icon-custom"
                          />
                          <p>resEmail</p>
                        </div>
                      </div>
                      <button className="logoutButton">Logout</button>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              {/* <FontAwesomeIcon icon={faUser} className="icon-custom" /> */}
            </div>
          </div>
        </div>
        <div className="insideDashboard">
          <div
            className="navigationbar"
            style={{
              width: widthOfNav,
              transition: "width 0.5s",
              padding: "0%",
            }}
          >
            <h4 className="navCompanyName" onClick={() => navigate("/")}>
              ExternHub
            </h4>
            <p className="comLastName">Solutions</p>
            <div className="navItems">
              <button
                className="sideButton"
                onClick={() => toggleMenu("/admin-dashboard/home", "Home")}
              >
                <FontAwesomeIcon
                  icon={faHome}
                  style={{ color: "white", paddingRight: "0.3rem" }}
                />
                Home
              </button>
              <button
                className="sideButton"
                onClick={() =>
                  toggleMenu(
                    "/admin-dashboard/contact-us",
                    "Contact Query Page"
                  )
                }
              >
                <FontAwesomeIcon
                  icon={faComment}
                  style={{ color: "white", paddingRight: "0.3rem" }}
                />
                ContactUs Query
              </button>
              <button
                className="sideButton"
                onClick={() =>
                  toggleMenu("/admin-dashboard/reg-status", "Registerd Student")
                }
              >
                <FontAwesomeIcon
                  icon={faUserPlus}
                  style={{ color: "white", paddingRight: "0.3rem" }}
                />
                Registerd Student
              </button>
            </div>
          </div>
          <div
            className="layout"
            style={{
              opacity:
                widthOfScreen < 800 ? (widthOfNav == "80%" ? "0.5" : "1") : "1",
            }}
            onClick={() => (widthOfScreen < 800 ? setwidthOfNav("0%") : null)}
          >
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/reg-status" element={<RegistrationStatus />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminDashBoard;
