import React, { useState, useEffect } from "react";
import "./Verification.css";
import NavbarTop from "../Navbar/NavbarTop";
import axios from "axios";
import Footer from "../Footer/Footer";
const Verfication = () => {
  const [message, setMessage] = useState("");
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [sId, setSid] = useState();
  const [data, setData] = useState();
  const handleSubmit = async (e) => {
    setProcessing(true);
    e.preventDefault();
    console.log(sId);

    if (sId === "") {
      setMessage("Please Fill CID");
    } else {
      try {
        let response = await axios.post(process.env.REACT_APP_VERIFY_USER, {
          sId: sId,
        });
        setMessage(response.data.message);
        if (response.status === 200) {
          setData(response.data.userData);
          console.log(response.data.userData);
          setSuccess(true);
        } else if (response.status === 201) {
          setMessage(response.data.message);
        } else {
          console.log(response.data.message);
        }
      } catch (error) {
        console.log(error);
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
  return (
    <div>
      <NavbarTop />
      <div className="veriHead " style={{ opacity: processing ? "0.7" : "1" }}>
        <div
          className="processingHeadVerify"
          style={{ display: processing ? "" : "none" }}
        >
          <div className="spinner-border" role="status" />
        </div>
        <div className="veriHeadInside container">
          <h3 className="veriTilte">Verfication</h3>
          <form className="veriPage" onSubmit={handleSubmit}>
            <input
              className="sIdInputField"
              placeholder="Enter CID"
              required
              value={sId}
              onChange={(e) => setSid(e.target.value)}
            />
            <button type="submit" className="checkUserBtn btn-primary">
              Check
            </button>
          </form>
          <div
            className="showResultsContainer"
            style={{ display: success ? "" : "none" }}
          >
            <div className="items">
              <div className="item">
                <label>CID : </label>
                <p>{data ? data.sId : null}</p>
              </div>
              <div className="item">
                <label>Name : </label>
                <p>&nbsp;{data ? data.fName : null}</p>
              </div>
              <div className="item">
                <label>Course : </label>
                <p>&nbsp;{data ? data.cName : null}</p>
              </div>
            </div>
            <div className="items">
              <div className="item">
                <label>Start Date : </label>
                <p>&nbsp;{data ? formatDate(data.cStartDate) : null}</p>
              </div>
              <div className="item">
                <label>End Date : </label>
                <p>&nbsp;{data ? formatDate(data.cEndDate) : null}</p>
              </div>
            </div>
            <div className="items">
              <div className="item">
                <label>Duration : </label>
                <p>&nbsp;45 Days</p>
              </div>
            </div>
          </div>
          <h5
            className="message"
            style={{
              display: message ? "" : "none",
              color: success ? "green" : "red",
            }}
          >
            {message}
          </h5>
        </div>
      </div>
    </div>
  );
};
export default Verfication;
