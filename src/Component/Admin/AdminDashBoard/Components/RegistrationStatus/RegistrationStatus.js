import React, { useState, useEffect, useContext } from "react";
import "./RegistrationStatus.css";
import axios from "axios";
import { UserContext } from "../../../../../UserContext";
import pdfWork from "./PdfWork";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function RegistrationStatus() {
  const { token } = useContext(UserContext);
  const [stuData, setStuData] = useState();
  const [message, setMessage] = useState();
  const [processing, setProcessing] = useState();
  const [curDate, setCurDate] = useState();
  const [success, setSuccess] = useState(false);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const LoadRegUserData = async () => {
    setProcessing(true);
    const response = await axios.post(
      process.env.REACT_APP_ADMIN_GET_STUDENT_Data,
      {},
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    );
    setMessage(response.data.message);
    if (response.status === 200) {
      // setShowMessageModal(true);
      console.log(response.data.list);
      setStuData(response.data.list);
    } else if (response.status === 201) {
      // setShowMessageModal(true);
    }
    setProcessing(false);
  };

  const getCurrentDate = async () => {
    try {
      const response = await axios.post(process.env.REACT_APP_CURRENT_DATE);
      const date = new Date(response.data.date);
      let day = String(date.getDate()).padStart(2, "0");
      let month = String(date.getMonth() + 1).padStart(2, "0");
      let year = String(date.getFullYear()).slice(-2);
      let formattedDate = `${day}/${month}/${year}`;
      console.log(formattedDate);
      setCurDate(formattedDate);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    LoadRegUserData();
    getCurrentDate();
  }, []);

  function capitalizeWords(str) {
    return str
      .trim()
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
  }

  const deleteMessage = (sId) => {
    console.log(sId);
    const filteredMessages = stuData.filter((msg) => !(msg.sId === sId));
    console.log(filteredMessages.length);
    setStuData(filteredMessages);
  };

  const sendOfferLetter = async (
    email,
    sId,
    currDate,
    fName,
    cName,
    cDate,
    status
  ) => {
    if (status === 1) {
      setProcessing(true);
      console.log(sId, fName, cName, cDate, status);
      const obj = {
        cId: sId,
        fName: capitalizeWords(fName),
        cName: capitalizeWords(cName),
        cDate: cDate,
        currDate: curDate,
      };
      const basePdfUrl = await pdfWork(obj);

      const response = await axios.post(
        process.env.REACT_APP_ADMIN_SEND_OFFER_LETTER,
        {
          sId: sId,
          email: email,
          name: fName,
          cName: cName,
          pdfBase64String: basePdfUrl,
          cDate: cDate,
          status: status,
        },
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        }
      );
      setMessage(response.data.message);
      handleMessageOpenModel();
      if (response.status === 200) {
        setSuccess();
        deleteMessage(sId);
      } else if (response.status === 201) {
        console.log("call 201");
      } else {
        alert("something went wrong");
      }
    } else {
      const response = await axios.post(
        process.env.REACT_APP_ADMIN_SEND_OFFER_LETTER,
        {
          sId: sId,
          status: status,
        },
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        }
      );
      setMessage(response.data.message);
      handleMessageOpenModel();
      if (response.status === 200) {
        setSuccess();
        deleteMessage(sId);
      } else if (response.status === 201) {
        console.log("call 201");
      } else {
        alert("something went wrong");
      }
    }
    setProcessing(false);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate()}/${date.toLocaleString("default", {
      month: "short",
    })}/${date.getFullYear()}`;
  };

  const handleMessageCloseModel = () => {
    setShowMessageModal(false);
  };
  const handleMessageOpenModel = () => {
    setShowMessageModal(true);
  };

  return (
    <div className="RegHead" style={{ opacity: processing ? "0.7" : "1" }}>
      <div
        className="processingSectionRegRes"
        style={{ display: processing ? "" : "none" }}
      >
        <div className="spinner-border " role="status" />
      </div>
      <h1>Registration Staus</h1>
      <div className="contentHead">
        {stuData &&
          stuData.map((item, index) => (
            <div key={index} className="items">
              <p className="item">
                <span className="boldWord">sId:</span> {item.sId}
              </p>
              <p className="item">
                <span className="boldWord">Name:</span> {item.fName}
              </p>
              <p className="item">
                <span className="boldWord">Email:</span> {item.email}
              </p>
              <p className="item">
                <span className="boldWord">DOB:</span> {item.dob}
              </p>
              <p className="item">
                <span className="boldWord">Phone:</span> {item.no}
              </p>
              <p className="item">
                <span className="boldWord">Edu Level:</span> {item.edu}
              </p>
              <p className="item">
                <span className="boldWord">IName: </span>
                {item.iName}
              </p>
              <p className="item">
                <span className="boldWord">City : </span>
                {item.city}
              </p>
              <p className="item">
                <span className="boldWord">State :</span> {item.state}
              </p>
              <p className="item">
                <span className="boldWord">Course Name:</span>
                {item.cName}
              </p>
              <p className="item">
                <span className="boldWord">Course Date: </span>
                {formatDate(item.cStartDate)}-{formatDate(item.cEndDate)}
              </p>
              <div className="itemBtnHead">
                <button
                  className="sendMail"
                  onClick={() =>
                    sendOfferLetter(
                      item.email,
                      item.sId,
                      item.currDate,
                      item.fName,
                      item.cName,
                      `${formatDate(item.cStartDate)} - ${formatDate(
                        item.cEndDate
                      )}`,
                      1
                    )
                  }
                >
                  sendMail
                </button>
                <button
                  className="invalidUser"
                  onClick={() =>
                    sendOfferLetter(
                      item.email,
                      item.sId,
                      item.currDate,
                      item.fName,
                      item.cName,
                      `${formatDate(item.cStartDate)} - ${formatDate(
                        item.cEndDate
                      )}`,
                      0
                    )
                  }
                >
                  Invalid User
                </button>
              </div>
            </div>
          ))}
      </div>
      <div>
        <Modal
          show={showMessageModal}
          onHide={handleMessageCloseModel}
          className="d-flex justify-content-center align-items-center modal "
        >
          <Modal.Body>
            <div>
              <div className="modalCloseSuccesHead">
                <FontAwesomeIcon
                  className="fa-icon"
                  icon={faTimes}
                  onClick={handleMessageCloseModel}
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
export default RegistrationStatus;
