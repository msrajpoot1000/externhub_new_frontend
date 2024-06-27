import React, { useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import NavbarTop from "./Component/User/FrontPage/Navbar/NavbarTop";
import FrontPage from "./Component/User/FrontPage/FrontPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AboutUs from "./Component/User/ContentPages/AboutUs/AboutUs";
import Privacy from "./Component/User/ContentPages/Privacy/Privacy";
import Refund from "./Component/User/ContentPages/Refund/Refund";
import TermsAndCondition from "./Component/User/ContentPages/TermsAndConditon/TermsAndCondition";
import ContactUs from "./Component/User/ContactUs/ContactUs";
import Verfication from "./Component/User/Verification/Verification";
import CoursePurchase from "./Component/User/CoursePurchase/CoursePurchase";
import AdminLogin from "./Component/Admin/Login/Login";
import AdminDashBoard from "./Component/Admin/AdminDashBoard/AdminDashBoard";
import InvalidPage from "./InvalidPage";
import { UserContext } from "./UserContext";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      // Whether animation should happen only once
      once: true,
    });
  }, []);

  const { token } = useContext(UserContext);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {token ? (
            <Route path="/admin-dashboard/*" element={<AdminDashBoard />} />
          ) : (
            <>
              <Route path="/" element={<FrontPage />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/privacy-policy" element={<Privacy />} />
              <Route path="/refund" element={<Refund />} />
              <Route
                path="/terms-and-condition"
                element={<TermsAndCondition />}
              />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/verification" element={<Verfication />} />
              <Route path="/register-course" element={<CoursePurchase />} />
              <Route path="/admin-login" element={<AdminLogin />} />
              <Route path="*" element={<InvalidPage />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
