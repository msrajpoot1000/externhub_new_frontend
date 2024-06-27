import React, { useEffect } from "react";
import NavbarTop from "../Navbar/NavbarTop";
import FrontView from "./FrontView/FrontView";
import GetToKnow from "./GetToKnow/GetToKnow";
import Recognized from "./Recognized/Recongnized";
import Footer from "../Footer/Footer";
import Courses from "./Courses/Courses";
import Features from "./Features/Features";
import Extra from "./Extra/Extra";
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
      <FrontView />
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
