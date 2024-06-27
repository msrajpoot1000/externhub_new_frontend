import React, { useEffect } from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";
import {
  faInstagram,
  faTwitter,
  faLinkedinIn,
  faFacebookF,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarker } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const navigate = useNavigate();

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const handleMailClick = () => {
    if (isMobile) {
      window.location.href = "mailto:your.email@example.com";
    }
  };

  return (
    <div className="footerHead">
      <footer class="footer container">
        <div class="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li data-aos="fade-right" onClick={() => navigate("/")}>
              <span className="gThan"> &gt; </span>
              <button>Home</button>
            </li>
            <li data-aos="fade-right" onClick={() => navigate("/contact-us")}>
              <span className="gThan"> &gt; </span> <button>Contact Us</button>
            </li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>Legal</h4>
          <ul>
            <li data-aos="fade-up" onClick={() => navigate("/privacy-policy")}>
              <span className="gThan"> &gt; </span>
              <button>Privacy Policy</button>
            </li>
            <li
              data-aos="fade-up"
              onClick={() => navigate("/terms-and-condition")}
            >
              <span className="gThan"> &gt; </span>
              <button>Terms and Conditions</button>
            </li>
            <li data-aos="fade-up" onClick={() => navigate("/refund")}>
              <span className="gThan"> &gt; </span>
              <button>Refund Policy</button>
            </li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>About Us</h4>
          <ul onClick={() => navigate("/about-us")}>
            <li data-aos="fade-left">
              <span className="gThan"> &gt; </span>
              <button>Our Story</button>
            </li>
          </ul>
        </div>
      </footer>

      <div className="footersection2 container">
        <h4 className="socialTitle">Follow Us</h4>
        <div className="socialMediaImg">
          <a
            href="https://www.linkedin.com/company/externhub-solutions/"
            target="_blank"
          >
            <FontAwesomeIcon
              data-aos="fade-top"
              className="sIcon"
              icon={faLinkedinIn}
            />
          </a>

          <a href="https://t.me/externHubSolutions" target="_blank">
            <FontAwesomeIcon
              data-aos="fade-top"
              className="sIcon"
              icon={faTelegram}
            />
          </a>

          <a
            href="https://www.instagram.com/externhub_solutions/"
            target="_blank"
          >
            <FontAwesomeIcon
              data-aos="fade-top"
              className="sIcon"
              icon={faInstagram}
            />
          </a>

          <a
            href={isMobile ? "" : "mailto:hr@externhubsolutions.in"}
            target={isMobile ? "_self" : "_blank"}
            onClick={handleMailClick}
          >
            <FontAwesomeIcon
              data-aos="fade-top"
              className="sIcon"
              icon={faEnvelope}
            />
          </a>
          <a
            href="https://www.facebook.com/people/ExternHub-Solutions/61559154134488/?mibextid=ZbWKwL"
            target="_blank"
          >
            <FontAwesomeIcon
              data-aos="fade-top"
              className="sIcon"
              icon={faFacebookF}
            />
          </a>
        </div>
      </div>
      <div className="footer-info container">
        <p>&copy; 2024 ExternHub. All rights reserved.</p>{" "}
      </div>
    </div>
  );
}
export default Footer;
