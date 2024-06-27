import { React, useState, useEffect, useContext } from "react";
import axios from "axios";
import "./Login.css";
import NavbarTop from "../../../Component/User/Navbar/NavbarTop";
import { UserContext } from "../../../UserContext";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
function Login() {
  const { setToken } = useContext(UserContext);
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const [message, setMessage] = useState("");
  const [processing, setProcessing] = useState(false);
  const [showSuccesModal, setShowSuccesModal] = useState(false);

  const handleLogin = async (e) => {
    setProcessing(true);
    e.preventDefault();

    if (userName.trim() === "") {
      setMessage("Please Enter Mail");
    } else if (pass.trim() === "") {
      setMessage("Plese Enter Password");
    } else {
      try {
        const response = await axios.post(process.env.REACT_APP_ADMIN_LOGIN, {
          userName: userName.trim(),
          pass: pass.trim(),
        });
        setMessage(response.data.message);
        if (response.status === 200) {
          console.log(response.data.message);
          setToken(response.data.token);
          navigate("/admin-dashboard/home");
        } else if (response.status === 201) {
          console.log(response.data.message);
          handleSuccessOpenModal();
        } else {
          console.log("something");
          setMessage("something went wron");
          handleSuccessOpenModal();
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }
    setProcessing(false);
  };

  const handleSuccessCloseModal = () => {
    setShowSuccesModal(false);
    setMessage("");
  };
  const handleSuccessOpenModal = () => {
    setShowSuccesModal(true);
    handleSuccessOpenModal();
  };
  return (
    <div>
      <NavbarTop />
      <div
        className="container loginClass"
        style={{ opacity: processing ? "0.7" : "1" }}
      >
        <div
          className="processingHeadLogin"
          style={{ display: processing ? "" : "none" }}
        >
          <div className="spinner-border" role="status" />
        </div>
        <div className="item-container">
          <p className="admin-login-title">Admin Login</p>
          <form onSubmit={handleLogin}>
            <div className="items">
              <label>Enter userName</label>
              <input
                className="userName"
                value={userName}
                placeholder="Enter User Name"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="items">
              <label>Enter Password</label>
              <input
                className="userPass"
                placeholder="Enter Password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              ></input>
            </div>
            <div className="items login-btn-head">
              <button type="submit" className="loginBtnLogin">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <Modal
          show={showSuccesModal}
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
                  color: "red",
                  fontWeight: "bold",
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
export default Login;
