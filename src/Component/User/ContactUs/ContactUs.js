import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ContactUs.css";
import NavbarTop from "../Navbar/NavbarTop";
import Modal from "react-bootstrap/Modal";
import Footer from "../Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import {
  faInstagram,
  faTwitter,
  faLinkedinIn,
  faFacebookF,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapMarker } from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
  const ScrollToTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    ScrollToTop();
  }, []);

  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [processing, setProcessing] = useState(false);
  const [message, setMessage] = useState("");
  const [showSuccesMessageModal, setShowSuccessModal] = useState(false);
  const [saveData, setSaveData] = useState(false);

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const handleMailClick = () => {
    if (isMobile) {
      window.location.href = "mailto:your.email@example.com";
    }
  };

  useEffect(() => {
    const inputs = document.querySelectorAll(".input");
    function focusFunc() {
      let parent = this.parentNode;
      parent.classList.add("focus");
    }
    function blurFunc() {
      let parent = this.parentNode;
      if (this.value === "") {
        parent.classList.remove("focus");
      }
    }
    inputs.forEach((input) => {
      input.addEventListener("focus", focusFunc);
      input.addEventListener("blur", blurFunc);

      // Cleanup function to remove event listeners
      return () => {
        input.removeEventListener("focus", focusFunc);
        input.removeEventListener("blur", blurFunc);
      };
    });
  }, []);

  const handleChangeContactDetail = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setContactData({ ...contactData, [name]: value });
  };

  const handleContactDetail = async (event) => {
    setProcessing(true);
    event.preventDefault();
    console.log(contactData);
    console.log(process.env.REACT_APP_CONTACT);
    if (contactData.name === "") {
      setMessage("Please Enter Your Name");
      console.log("Please Enter Your Name");
    } else if (contactData.message === "") {
      setMessage("Please Enter Your Message");
      console.log("Please Enter Your Message");
    } else if (contactData.email === "") {
      setMessage("Please Enter Your Email");
      console.log("Please Enter Your Email");
    } else if (contactData.message.length >= 500) {
      setMessage("Message is too long " + contactData.message.length + ">500");
      console.log(contactData.message.length);
      console.log("Message is too long " + contactData.message.length);
    } else {
      const data = {
        name: contactData.name.toLowerCase().trim(),
        email: contactData.email.toLowerCase().trim(),
        message: contactData.message.toLowerCase().trim(),
      };
      console.log(data);
      try {
        const response = await axios.post(process.env.REACT_APP_CONTACT, {
          contactData: data,
        });
        setMessage(response.data.message);
        if (response.status === 200) {
          setSaveData(true);
        } else if (response.status === 201) {
          setMessage(response.data.message);
        } else {
          setMessage("Something Went Wrong");
        }
        setShowSuccessModal(true);
      } catch (error) {
        console.error(error);
        alert("An error occurred");
      }
    }
    setProcessing(false);
  };

  const handleSuccessCloseModal = () => {
    setContactData({
      ...contactData,
      name: "",
      email: "",
      message: "",
    });
    setShowSuccessModal(false);
    setMessage("");
  };

  return (
    <div>
      <NavbarTop />

      <div
        className="ContactUsHead"
        style={{ opacity: processing ? "0.7" : "1" }}
      >
        <div className="container1">
          <span className="big-circle"></span>
          <img src="img/shape.png" className="square" alt="" />
          <div className="form">
            <div className="contact-info">
              <h3 className="title">
                Questions about our Internship Opportunities?
              </h3>
              <p className="text">
                Interested in working together? We would be thrilled to chat!
                Reach out and we will get in touch soon.
              </p>

              <div className="info">
                {/* <div className="information">
                  <p>
                    <span className="themeColor">
                      <FontAwesomeIcon icon={faMapMarker} />
                    </span>
                    C-94, Dev Vihar, 52 Feet Hanuman Ji, Agra Road, Jaipur,
                    302006
                  </p>
                </div> */}
                <div className="information">
                  <p>
                    <span className="themeColor">
                      {" "}
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>{" "}
                    hr@externhubsolutions.in
                  </p>
                </div>
              </div>

              <div className="social-media">
                <p>Connect with us :</p>
                <div className="social-icons">
                  <a
                    href="https://www.linkedin.com/company/externhub-solutions"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                  <a href="https://t.me/externHubSolutions" target="_blank">
                    <FontAwesomeIcon icon={faTelegram} />
                  </a>
                  <a
                    href="https://www.instagram.com/externhub_solutions/"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    href={isMobile ? "" : "mailto:hr@externhubsolutions.in"}
                    target={isMobile ? "_self" : "_blank"}
                    onClick={handleMailClick}
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                  <a
                    href="https://www.facebook.com/people/ExternHub-Solutions/61559154134488/?mibextid=ZbWKwL"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <span className="circle one"></span>
              <span className="circle two"></span>

              <form onSubmit={handleContactDetail}>
                <div
                  className="processingHeadContactUs"
                  style={{ display: processing ? "" : "none" }}
                >
                  <div className="spinner-border" role="status" />
                </div>
                <span
                  style={{
                    display: message ? "" : "none",
                  }}
                  className="contactMess"
                >
                  {message}
                </span>
                <h3 className="title">Contact us</h3>
                <div className="input-container">
                  <input
                    type="text"
                    name="name"
                    required
                    value={contactData.name}
                    className="input"
                    onChange={handleChangeContactDetail}
                  />
                  <label htmlFor="">Name</label>
                  <span>Name</span>
                </div>
                <div className="input-container">
                  <input
                    type="email"
                    name="email"
                    className="input"
                    required
                    value={contactData.email}
                    onChange={handleChangeContactDetail}
                  />
                  <label htmlFor="">Email</label>
                  <span>Email</span>
                </div>
                <div className="input-container textarea">
                  <textarea
                    name="message"
                    className="input"
                    required
                    value={contactData.message}
                    onChange={handleChangeContactDetail}
                  ></textarea>
                  <label htmlFor="">Message</label>
                  <span>Message</span>
                </div>
                <button type="submit" className="btn contactBtn">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <div>
        <Modal
          show={showSuccesMessageModal}
          onHide={handleSuccessCloseModal}
          className="d-flex justify-content-center align-items-center modal "
        >
          <Modal.Body>
            <div>
              <div className="modalCloseSuccesHead">
                <FontAwesomeIcon
                  className="fa-icon"
                  icon={faTimes}
                  onClick={handleSuccessCloseModal}
                />
              </div>
              <p
                style={{
                  color: "green",
                  fontWeight: "bold",
                  color: saveData ? "green" : "red",
                }}
              >
                {message}
              </p>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default ContactUs;
