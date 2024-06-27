import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Courses.css";
import webDevImg from "./imgSection/web-dev-img.jpg";
import aiImg from "./imgSection/ai-img.jpg";
import dataScienceImg from "./imgSection/data-science-img.jpg";
import PythonDeveloperImg from "./imgSection/python-img.webp";
import JavaImg from "./imgSection/java.jpg";
import PhpImg from "./imgSection/php-developer.avif";
import { UserContext } from "../../../../UserContext";

function Courses() {
  const navigate = useNavigate();
  const opportunities = [
    {
      cName: "Web Development",
      des: "Immerse yourself in the world of front-end and back-end web technologies. Design and build interactive websites, ensuring seamless user experiences. Learn to create responsive layouts, utilize modern JavaScript frameworks, and work with databases to create dynamic web applications.",
      cImg: webDevImg,
    },
    {
      cName: "Artificial Intelligence",
      des: "Dive into the fascinating field of AI. Explore machine learning algorithms, natural language processing, and computer vision. Work on projects that involve building intelligent systems capable of decision-making, pattern recognition, and problem-solving.",
      cImg: aiImg,
    },
    {
      cName: "Data Science",
      des: "Uncover hidden insights from large datasets. Learn to gather, clean, and analyze data using statistical methods and machine learning techniques. Develop data-driven solutions for various industries, from predicting customer behavior to optimizing business processes.",
      cImg: dataScienceImg,
    },
    {
      cName: "Python Developer",
      des: "Become proficient in Python, a versatile and widely-used programming language. Work on projects involving scripting, web development, data analysis, automation, and more. Develop a strong foundation in Python's libraries and frameworks.",
      cImg: PythonDeveloperImg,
    },
    {
      cName: "Java Developer",
      des: "Master Java, a powerful object-oriented programming language known for its platform independence and scalability. Build robust enterprise applications, web services, and mobile apps. Gain expertise in Java's core concepts and frameworks.",
      cImg: JavaImg,
    },
    {
      cName: "Php Developer",
      des: "Specialize in PHP, a popular scripting language primarily used for web development. Design and develop dynamic websites and web applications. Learn to work with databases, implement server-side logic, and integrate various web technologies.",
      cImg: PhpImg,
    },
  ];

  const { setCourse } = useContext(UserContext);
  const navigateCourseReg = (course1) => {
    navigate("/register-course");
    setCourse(course1);
    console.log(course1);
  };

  return (
    <div className="coursesHead">
      <div className="container">
        <h3 className="coursesTitle">Explore Opportunities</h3>
        <div className="courses">
          {opportunities.map((opportunity, index) => (
            <div key={index} className="card" data-aos="flip-left">
              <img src={opportunity.cImg} alt={opportunity.cName} />
              <h5 className="courseName">{opportunity.cName}</h5>
              <p>{opportunity.des}</p>
              <button onClick={() => navigateCourseReg(opportunity.cName)}>
                Apply
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* <img data-aos="fade-right" src={webDevImg} alt="manis" /> */}
      //{" "}
    </div>
  );
}
export default Courses;
