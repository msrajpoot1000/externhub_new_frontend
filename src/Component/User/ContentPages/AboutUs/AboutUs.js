import React, { useEffect, useState } from "react";
import NavbarTop from "../../Navbar/NavbarTop";
import Footer from "../../Footer/Footer";
import "./AboutUs.css";
import OurVision from "./our-vision.jpg";
import Himanshu from "./Himanshu-Img.png";
import Rajat from "./Rajat-Img.jpg";
import Manish from "./Manish-Img.png";
function AboutUs() {
  const [manishContent, setManishContent] = useState(false);
  const [himanshuContent, setHimanshuContent] = useState(false);
  const [rajatContent, setRajatContent] = useState();
  const ScrollToTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    ScrollToTop();
  }, []);

  return (
    <div>
      <NavbarTop />
      <div className="AboutUsHead">
        <div className=" container">
          <h1 className="AboutHeading">About Us</h1>
          <section>
            <h4>Empowering Tech Talents of Tomorrow</h4>
            <p>
              Welcome to Externhub, your gateway to unlocking the exciting world
              of technology through transformative internship opportunities. At
              Externhub,we are dedicated to nurturing the next generation of
              tech innovators and leaders by providing hands-on learning
              experiences and mentorship in the dynamic tech industry.
            </p>
          </section>
          <section>
            <h4>What We Offer</h4>
            <p>
              At Externhub, we offer internship opportunities exclusively in the
              tech domain, covering a wide range of disciplines, including
              software development, data science, artificial intelligence, and
              more. Whether you're passionate about coding, analytics, or
              cutting-edge technologies, we have internship programs tailored to
              your interests and career aspirations.
            </p>
          </section>
          <section>
            <h4>Why Choose Us?</h4>
            <p>
              Commitment to Excellence: We are committed to excellence in
              everything we do, from the quality of our internship programs to
              the support and resources we provide to our interns.
            </p>
            <p>
              Innovation and Creativity: We believe in the power of innovation
              and creativity to drive progress and transformation in the tech
              industry. Join us in exploring new ideas, pushing boundaries, and
              creating solutions that make a difference.
            </p>
            <p>
              Career Growth and Opportunities: Our internship programs are
              designed to set you up for success in your future tech career.
              Gain valuable experience, build your portfolio, and unlock
              exciting opportunities for growth and advancement in the tech
              industry.
            </p>
            <p>
              Join us at Externhub take the first step towards a rewarding and
              impactful career in technology. Your tech journey starts here.
              Please reach us hr@externhubsolutions.in .
            </p>
          </section>
          <section className="our-vision">
            <div>
              <h4 className="wordCenter">Our Vision</h4>
              <p>
                Our vision is to create a global community of empowered interns,
                mentors, and partners who collaborate to drive innovation,
                foster diversity, and shape the future of work. We aspire to be
                the catalyst for change in the internship landscape, inspiring
                organizations to prioritize experiential learning and invest in
                the development of emerging talent.
              </p>
              <p>
                Through our vision, we seek to break down barriers and create
                pathways for success, regardless of background, gender, or
                circumstance. We envision a future where internships are not
                just stepping stones but transformative experiences that ignite
                passion, unlock potential, and fuel lifelong learning.
              </p>
            </div>
            <div className="our-vision-head">
              <img src={OurVision} />
            </div>
          </section>
          <section className="founder-info-section">
            <div className="card">
              <img src={Manish} alt="Admin Img" />
              <div className="cardContent">
                <h4 className="adminName">Manish Singh</h4>
                <h6 className="adminPos">CEO</h6>
                <p className={manishContent ? "" : "lessContent"}>
                  Passionate about leading innovative projects and driving
                  organizational success. My journey is all about constant
                  growth, and I'm excited to explore opportunities where I can
                  contribute my technical prowess, creativity, and dedication.
                </p>
                <button
                  className="contentBtn"
                  onClick={() => setManishContent(!manishContent)}
                >
                  {manishContent ? "See Less" : "See More"}
                </button>
              </div>
            </div>
            <div className="card">
              <img src={Himanshu} alt="Admin Img" />
              <div className="cardContent">
                <h4 className="adminName">Himanshu Sharma</h4>
                <h6 className="adminPos">CMO</h6>
                <p className={himanshuContent ? "" : "lessContent"}>
                  The CMO of ExternHub Solutions, I'm dedicated to connecting
                  students with valuable internship opportunities. With a focus
                  on authenticity and innovation, we're shaping the future of
                  work through meaningful connections and impactful marketing
                  strategies. Join us on this journey of empowerment and
                  growth.With a passion for innovation and a commitment to
                  excellence, I lead our marketing efforts to connect talented
                  students with valuable internship experiences.
                </p>
                <button
                  className="contentBtn"
                  onClick={() => setHimanshuContent(!himanshuContent)}
                >
                  {himanshuContent ? "See Less" : "See More"}
                </button>
              </div>
            </div>
            {/* <div className="card">
              <img src={Rajat} alt="Admin Img" />
              <div className="cardContent">
                <h4 className="adminName">Rajat Sharma</h4>
                <h6 className="adminPos">CTO</h6>
                <p className={rajatContent ? "" : "lessContent"}>
                  Leading technological innovation and exceptional customer
                  experiences, we build cutting-edge solutions at ExternHub Solutions. Our talented team of engineers and developers tackles
                  complex problems, propelling our business forward.
                </p>
                <button
                  className="contentBtn"
                  onClick={() => setRajatContent(!rajatContent)}
                >
                  {rajatContent ? "See Less" : "See More"}
                </button>
              </div>
            </div> */}
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default AboutUs;
