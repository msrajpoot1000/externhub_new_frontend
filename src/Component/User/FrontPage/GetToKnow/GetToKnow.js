import React, { useEffect } from "react";
import "./GetToKnow.css";
import logo from "./logo_ExternHu3.png";
function GetToKnow() {
  return (
    <div data-aos="fade-up" className="getToKnowHead">
      <div className="container">
        <h3 className="getToTitle">Get to Know ExternHub</h3>
        <p className="getToContent">
          Welcome to <span className="boldWord">ExternHub Solutions</span>,
          we're passionate about empowering the next generation of professionals
          through hands-on, practical learning experiences. We believe that the
          best way to learn is by doing, which is why our internships immerse
          you in real projects, giving you the chance to apply your knowledge
          and develop practical skills.
        </p>
        <p>
          <span className="boldWord"> ExternHub Solutions</span> ensures you're
          not just building a resume, but developing the skills that employers
          value most through hands-on internships. Whether you're a student
          looking to gain practical experience or a recent graduate seeking to
          kickstart your career, we're your gateway to real-world
          learning and growth.
        </p>
      </div>
      {/* <img className="getBackLogo" src={logo} /> */}
    </div>
  );
}
export default GetToKnow;
