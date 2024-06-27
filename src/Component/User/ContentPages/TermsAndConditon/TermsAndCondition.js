import React, { useEffect } from "react";
import NavbarTop from "../../Navbar/NavbarTop";
import Footer from "../../Footer/Footer";
import "./TermsAndCondition.css";
function TermsAndCondition() {
  const ScrollToTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    ScrollToTop();
  }, []);
  return (
    <div>
      <NavbarTop />
      <div className="termsHead">
        <div className="container">
          <h3 className="termsTitle">Terms And Condition</h3>
          <p>
            Welcome to <span className="boldWord">Externhub</span> Before
            accessing or using our internship services, please carefully read
            and agree to the following terms and conditions. By accessing or
            using our internship programs, you agree to be bound by these terms
            and conditions.
          </p>
          <p>
            <span className="boldWord">Eligibility:</span> Our internship
            programs are open to individuals who meet the eligibility criteria
            specified for each program. Eligibility requirements may include but
            are not limited to educational qualifications, skills, and
            experience.
          </p>
          <p>
            <span className="boldWord">Application Process:</span> To apply for
            an internship, you must complete and submit the application form
            provided on our website. We reserve the right to review and evaluate
            all applications based on our selection criteria and requirements.
          </p>
          <p>
            <span className="boldWord">Internship Duration: </span>The duration
            of each internship program may vary depending on the specific
            program and project requirements. Interns are expected to commit to
            the full duration of the program as specified in the internship
            agreement.
          </p>
          <p>
            <span className="boldWord">
              Confidentiality and Non-Disclosure:
            </span>
            As an intern at <span className="boldWord">Externhub</span>, you may
            have access to confidential information, proprietary technology, and
            intellectual property. You agree to maintain the confidentiality of
            such information and not disclose it to third parties without prior
            written consent.
          </p>
          <p>
            <span className="boldWord">Intellectual Property Rights:</span> Any
            work, projects, or inventions created or developed during the
            internship program shall be the exclusive property of Externhub. You
            agree to assign all rights, title, and interest in and to such
            intellectual property to Externhub.
          </p>
          <p>
            <span className="boldWord">Termination: </span> We reserve the right
            to terminate your internship at any time for any reason, including
            but not limited to violation of these terms and conditions,
            misconduct, or failure to meet performance expectations.
          </p>
          <p>
            <span className="boldWord"> Modification of Terms:</span> We reserve
            the right to modify or update these terms and conditions at any time
            without prior notice. It is your responsibility to review these
            terms periodically for any changes.
          </p>
          <p>
            By accessing or using our internship services, you acknowledge that
            you have read, understood, and agree to be bound by these terms and
            conditions. If you have any questions or concerns about these terms,
            please contact us at [our email address].
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default TermsAndCondition;
