import React, { useEffect } from "react";
import NavbarTop from "../Navbar/NavbarTop";
import FrontView from "./FrontView/FrontView";
import GetToKnow from "./GetToKnow/GetToKnow";
import Recognized from "./Recognized/Recongnized";
import Footer from "../Footer/Footer";
import Courses from "./Courses/Courses";
import Features from "./Features/Features";
import Extra from "./Extra/Extra";
import FrontAbout from "./FrontAbout/FrontAbout";
import FrontView2 from "./FrontView/FrontView2";
function FrontPage() {
  const ScrollToTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    ScrollToTop();
  }, []);
  return (
    <div>
      {/* <NavbarTop /> */}
      {/* <FrontView /> */}
      <FrontView2 />
      <FrontAbout />
      <GetToKnow />
      <Features />
      <Courses />
      <Recognized />
      <Footer />
      {/* <Extra /> */}
    </div>
  );
}
export default FrontPage;
