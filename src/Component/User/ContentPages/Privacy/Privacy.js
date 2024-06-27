import React, { useEffect } from "react";
import NavbarTop from "../../Navbar/NavbarTop";
import Footer from "../../Footer/Footer";
import "./Privacy.css";
function Privacy() {
  const ScrollToTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    ScrollToTop();
  }, []);
  return (
    <div>
      <NavbarTop />
      <div className="privacyHead">
        <div className="privacyHeadInside container">
          <h1 className="privacyTitle">Privacy Policy</h1>
          <section>
            <p>
              At Externhub, we are committed to protecting your privacy and
              ensuring the security of your personal information. This Privacy
              Policy outlines how we collect, use, and safeguard the information
              you provide to us.
            </p>
          </section>
          <section>
            <h4>Information we collect</h4>
            <p>
              <span className="boldWord">Personal Information:</span> When you
              use our services or interact with us, we may collect personal
              information such as your name, email address, phone number, and
              other contact details.
            </p>
            <p>
              <span className="boldWord">Usage Information:</span> We may also
              collect information about how you use our website, including your
              browsing activities, IP address, device information, and location
              data.
            </p>
          </section>
          <section>
            <h4>How we use your information </h4>
            <p>
              <span>To Provide Services:</span> We use your information to
              facilitate internship placements, communicate with you, and
              provide support and assistance throughout your internship journey.
            </p>
            <p>
              <span> To Improve Our Services:</span> We may analyze usage data
              to improve our website, services, and user experience.
            </p>
            <p>
              <span> To Comply with Legal Obligations: </span>We may use your
              information to comply with applicable laws, regulations, or legal
              processes.
            </p>
          </section>
          <section>
            <h4>Information Sharing</h4>
            <p>
              We do not sell, trade, or rent your personal information to third
              parties. However, we may share your information with trusted
              partners, service providers, or affiliates who assist us in
              delivering our services.
            </p>
            <p>
              We may also disclose your information in response to legal
              requests, to protect our rights or the rights of others, or to
              prevent fraud or security issues.
            </p>
          </section>
          <section>
            <h4>Data Security</h4>
            <p>
              We employ industry-standard security measures to protect your
              personal information from unauthorized access, disclosure,
              alteration, or destruction.
            </p>
            <p>
              We employ industry-standard security measures to protect your
              personal information from unauthorized access, disclosure,
              alteration, or destruction.
            </p>
            <p>
              However, no method of transmission over the internet or electronic
              storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>
          <section>
            <h4>Your Choices</h4>
            <p>
              You have the right to access, update, or delete your personal
              information. You can also choose to opt out of receiving
              promotional communications from us.
            </p>
            <p>
              Please note that certain information may be necessary for us to
              provide our services, and deleting such information may affect
              your ability to use our services.
            </p>
          </section>
          <section>
            <h4>Changes to the Policy</h4>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page, and we encourage you to review this
              Policy periodically.
            </p>
            <p>
              By using our services, you consent to the collection, use, and
              disclosure of your information as described in this Privacy
              Policy. If you have any questions or concerns about this Policy or
              our data practices, please contact us at
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default Privacy;
