import React, { useState, useEffect, userContext, useContext } from "react";
import { UserContext } from "../../../../../UserContext";
import axios from "axios";
import "./ContactUs.css";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faTimes } from "@fortawesome/free-solid-svg-icons";
function ContactUs() {
  const { token } = useContext(UserContext);
  const [contactUsData, setContactUsData] = useState([]);
  const [message, setMessage] = useState("");
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [sendMessage, setSendMessage] = useState("");
  const [selectedMessage, setSelectedMessage] = useState(null);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate()}/${date.toLocaleString("default", {
      month: "short",
    })}/${date.getFullYear()}`;
  };

  const getContactUsMessages = async () => {
    setProcessing(true);
    try {
      const response = await axios.post(
        process.env.REACT_APP_ADMIN_GET_MESSAGES,
        {},
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setContactUsData(response.data.messs);
        setSuccess(true);
        console.log(response.data.messs);
      } else if (response.status === 201) {
        setMessage(response.data.messaage);
        console.log(response.data.messaage);
      } else {
        setMessage(response.data.messaage);
      }
    } catch (err) {
      alert(err);
    }
    setProcessing(false);
  };
  useEffect(() => {
    getContactUsMessages();
  }, []);

  const deleteMessage = (name, email, date) => {
    const filteredMessages = contactUsData.filter(
      (msg) =>
        !(
          msg.name === name &&
          msg.email === email &&
          new Date(msg.date).toISOString() === new Date(date).toISOString()
        )
    );
    setContactUsData(filteredMessages);
  };

  const ResolveMessage = async (name, email, date) => {
    setProcessing(true);
    console.log(sendMessage);
    const response = await axios.post(
      process.env.REACT_APP_ADMIN_RESPONSE_MESS_CONTACT,
      {
        name: name,
        email: email,
        date: date,
        status: 1,
        fMessage: sendMessage,
      },
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    );
    setMessage(response.data.message);
    if (response.status === 200) {
      setShowMessageModal(true);
      deleteMessage(name, email, date);
    } else if (response.status === 201) {
      setShowMessageModal(true);
    }
    setProcessing(false);
  };

  const ResolveCorruptMessage = async (name, email, date) => {
    setProcessing(true);
    const response = await axios.post(
      process.env.REACT_APP_ADMIN_RESPONSE_MESS_CONTACT,
      { name: name, email: email, date: date, status: 0 },
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    );
    setMessage(response.data.message);
    if (response.status === 200) {
      setShowMessageModal(true);
      deleteMessage(name, email, date);
    } else if (response.status === 201) {
      setShowMessageModal(true);
    }
    setProcessing(false);
  };

  const handleCloseModal = () => {
    setShowMessageModal(false);
    setMessage("");
  };
  const handleOpenModal = () => {
    setShowMessageModal(true);
  };

  useEffect(() => {
    console.log(sendMessage);
  }, [sendMessage]);

  return (
    <div>
      <div
        className="ContactUsHead"
        style={{
          opacity: processing ? "0.7" : "1",
          height: contactUsData.length === 0 ? "80vh" : "",
          height: processing ? "80vh" : "",
        }}
      >
        <div
          className="emptyList"
          style={{ display: contactUsData.length === 0 ? "" : "none" }}
        >
          <h1>{message}</h1>
        </div>
        <div
          className="processingHeadContactUsAdmin"
          style={{ display: processing ? "" : "none" }}
        >
          <div className="spinner-border" role="status" />
        </div>
        <h1>ContactUs</h1>

        {contactUsData.map((msg, index) => (
          <div className="contactUsDataHead" key={index}>
            <div className="items itemsHeading">
              <p className="name">name: {msg.name}</p>
              <p className="email">email: {msg.email}</p>
              <p className="date">date: {formatDate(msg.date)}</p>
            </div>
            <div className="items">
              <p className="msg">
                <span style={{ fontWeight: "bold" }}>message:</span>{" "}
                {msg.message}
              </p>
            </div>
            {selectedMessage === msg ? (
              <div className="items">
                <textarea
                  rows="4"
                  onChange={(e) => setSendMessage(e.target.value)}
                  value={sendMessage}
                ></textarea>
              </div>
            ) : null}
            <div className="items itemsButtonHead">
              <button
                onClick={() =>
                  selectedMessage
                    ? setSelectedMessage(null)
                    : setSelectedMessage(msg)
                }
              >
                {selectedMessage === null ? "Fill Message" : "Close Fill"}
              </button>
              <button
                onClick={() => ResolveMessage(msg.name, msg.email, msg.date)}
              >
                resolve
              </button>
              <button
                className="coorupt"
                onClick={() =>
                  ResolveCorruptMessage(msg.name, msg.email, msg.date)
                }
              >
                corroupt message
              </button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Modal
          show={showMessageModal}
          onHide={handleCloseModal}
          className="d-flex justify-content-center align-items-center modal "
        >
          <Modal.Body>
            <div>
              <div className="modalCloseSuccesHead">
                <FontAwesomeIcon
                  className="fa-icon"
                  icon={faTimes}
                  onClick={handleCloseModal}
                />
              </div>
              <p
                style={{
                  color: "green",
                  fontWeight: "bold",
                  color: success ? "green" : "red",
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
}
export default ContactUs;
