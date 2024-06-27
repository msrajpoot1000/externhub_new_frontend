import React from "react";
import "./Signup.css";
import NavbarTop from "../Navbar/NavbarTop";
import Footer from "../Footer/Footer";

function Signup() {
  return (
    <div>
      <NavbarTop />
      <div className="SignUpHead container">
        <div className="SignUp">
          <div className="crossBtnHead">
            <div className="sec1">
              <h3>SignUp</h3>
            </div>
          </div>
          <div className="item-container-signup ">
            <div className="item labelSection">
              <label>Email</label>
              <label>Password</label>
              <label>Name</label>
              <label>D.O.B</label>
              <label>City</label>
              <label>State</label>
              <label>Education </label>
            </div>
            <div className="item inputSection">
              <input placeholder="Email" />
              <input placeholder="Password" />
              <input placeholder="Name" />
              <input placeholder="01/04/2001" />
              <input placeholder="Jaipur" />
              <input placeholder="Rajasthan" />
              <select>
                <option style={{ color: "rgb(135, 134, 134)" }}>
                  no select
                </option>
                <option>matric</option>
                <option value="high school">High School</option>
                <option>Graduate</option>
                <option>High</option>
              </select>
            </div>
          </div>
          <div className="signUPcanFor">
            <button className="sign-in-signup">Sign-In</button>
          </div>

          <button className="signUpBtn">SignUp</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Signup;
