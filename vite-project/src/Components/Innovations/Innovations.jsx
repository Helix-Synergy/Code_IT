import React, { useState, useEffect } from "react";
import "./Innovations.css";

const Innovations = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "../../../public/Images/one.jpg",
      title: "Innovative IT Solutions for Modern Businesses",
      description:
        "We bring a fresh, dynamic perspective to every client relationship, driven by a relentless energy that sparks action.",
    },
    {
      image: "../../../public/Images/two.webp",
      title: "Innovative IT Solutions for Modern Businesses",
      description:
        "We bring a fresh, dynamic perspective to every client relationship, driven by a relentless energy that sparks action.",
    },
    {
      image: "../../../public/Images/three.jpg",
      title: "Innovative IT Solutions for Modern Businesses",
      description:
        "We bring a fresh, dynamic perspective to every client relationship, driven by a relentless energy that sparks action.",
    },
  ];
  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="innovations-wrapper">
      {/* Image Slider Section */}
      <div className="innovations-container">
        <div className="slider">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? "active" : ""}`}
              style={{
                backgroundImage: `url("${slide.image}")`,
              }}
            >
              <div className="slide-content">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}

          {/* Dots indicator */}
          <div className="dots-container">
            {slides.map((slide, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? "active" : ""}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentSlide ? "true" : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Innovations;
