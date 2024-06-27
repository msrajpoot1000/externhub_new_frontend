import React, { useRef, useEffect, useState } from "react";
import "./Features.css";
import career_dev from "./career_dev.png";
import Community from "./community_eng.png";
import feedback from "./feedback_eva.png";
import flexibility from "./Flexibility_convi.png";
import hands_training from "./hands_training.png";
import industry_curr from "./industry_curr.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Features() {
  const sliderRef = useRef(null);
  const [slidesToScroll, setSlidesToScroll] = useState(1);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    console.log(screenWidth);
  }, [screenWidth]);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup: remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScroll = () => {
    // Get the current scroll position
    const scrollLeft =
      sliderRef.current.innerSlider.list.getBoundingClientRect().left;
    // Calculate the number of slides to scroll based on the scroll position
    const slides = sliderRef.current.innerSlider.state.slideCount;
    const slideWidth =
      sliderRef.current.innerSlider.list.getBoundingClientRect().width / slides;
    const slidesInView = Math.round(window.innerWidth / slideWidth);
    setSlidesToScroll(slidesInView);
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: screenWidth > 800 ? 3 : 1,
    slidesToScroll: slidesToScroll,
    // variableWidth: true, // This is required for responsive slide widths
    onScroll: handleScroll, // Call handleScroll when scrolling occurs
    infinite: true,
    speed: 1500,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
  };
  return (
    <div>
      <div className="container">
        <h2 className="featureTitle">Features</h2>
      </div>
      <div className="container Head">
        <Slider ref={sliderRef} {...settings}>
          <div className="card1">
            <div className="front1">
              <img src={hands_training} alt="Hands On Training" />
              <p className="cardTitle1">Hands On Training </p>
            </div>
          </div>

          <div className="card1">
            <div className="front1">
              <img src={industry_curr} alt="Industry Related Curriculum" />
              <p className="cardTitle1">Industry Related Curriculum</p>
            </div>
          </div>

          <div className="card1">
            <div className="front1">
              <img src={career_dev} alt="Career Development" />
              <p className="cardTitle1">Career Development</p>
            </div>
          </div>

          <div className="card1">
            <div className="front1">
              <img src={flexibility} alt="Flexibility and Convenience" />
              <p className="cardTitle1">Flexibility and Convenience</p>
            </div>
          </div>

          <div className="card1">
            <div className="front1">
              <img src={feedback} alt="Feedback and Evaluation" />
              <p className="cardTitle1">Feedback and Evaluation</p>
            </div>
          </div>

          <div className="card1">
            <div className="front1">
              <img src={Community} alt="Community Engagement" />
              <p className="cardTitle1">Community Engagement</p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
export default Features;
