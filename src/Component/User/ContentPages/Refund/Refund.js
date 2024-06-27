import React, { useEffect } from "react";
import NavbarTop from "../../Navbar/NavbarTop";
import Footer from "../../Footer/Footer";
import "./Refund.css";
function Refund() {
  const ScrollToTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    ScrollToTop();
  }, []);
  return (
    <div>
      <NavbarTop />
      <div className="RefundHead">
        <div className="container">
          <h3 className="refundTitle">Refund Policy</h3>
          <div>
            <p>
              At Externhub, we are committed to providing exceptional internship
              experiences to all our participants. We invest significant
              resources in organizing and facilitating our internship programs
              to ensure that participants receive valuable learning
              opportunities and professional development.
            </p>
            <p>
              As part of our commitment to maintaining the quality and integrity
              of our programs, we have established the following refund policy:
            </p>
          </div>
          <div>
            <h6>No Refund Policy</h6>
            <ul>
              <li>
                We regret to inform you that we do not offer refunds for any
                reason, including but not limited to cancellation of
                participation, withdrawal from the program, or dissatisfaction
                with the internship experience.
              </li>
              <li>
                Once payment has been made for our internship programs, it is
                considered final and non-refundable.
              </li>
              <li>
                Please carefully consider your decision to participate in our
                programs before making a payment, as refunds will not be issued
                under any circumstances.
              </li>
            </ul>
          </div>
          <div>
            <h6>Cancellation Policy</h6>
            <ul>
              <li>
                If you are unable to participate in our internship program after
                making a payment, we encourage you to notify us as soon as
                possible. However, please note that cancellation of
                participation will not entitle you to a refund.
              </li>
            </ul>
          </div>
          <div>
            <h6>Modification Of Refund Policy </h6>
            <p>
              We reserve the right to modify or update our refund policy at any
              time without prior notice. Any changes to the refund policy will
              be effective immediately upon posting on our website.
            </p>
          </div>
          <div>
            <h6>Contact Us</h6>
            <p>
              If you have any questions or concerns regarding our refund policy,
              please contact us at [Contact Information]. We are here to assist
              you and provide clarification on our policies.
            </p>
          </div>
          <div>
            <p>
              By participating in our internship programs and making payment,
              you acknowledge that you have read, understood, and agree to be
              bound by our refund policy. Thank you for your understanding and
              cooperation.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default Refund;
