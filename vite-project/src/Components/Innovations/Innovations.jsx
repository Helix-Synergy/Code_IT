import React, { useState, useEffect } from 'react';
import './Innovations.css';

const Innovations = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "/Images/New folder 1/hacker-8003396_1280.webp",
      title: "Innovative IT Solutions for Modern Businesses",
      description: "We bring a fresh, dynamic perspective to every client relationship, driven by a relentless energy that sparks action."
    },
    {
      image: "/Images/New%20folder%201/steptodown.com144720.webp",
      title: "Innovative IT Solutions for Modern Businesses", 
      description: "We bring a fresh, dynamic perspective to every client relationship, driven by a relentless energy that sparks action."
    },
    {
      image: "/Images/New folder 1/hacker-8003396_1280.webp",
      title: "Innovative IT Solutions for Modern Businesses",
      description: "We bring a fresh, dynamic perspective to every client relationship, driven by a relentless energy that sparks action."
    }
  ];

  const services = [
    {
      number: "01",
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs"
    },
    {
      number: "02", 
      title: "IT Consulting",
      description: "Strategic IT guidance to optimize your technology infrastructure"
    },
    {
      number: "03",
      title: "Cyber Security",
      description: "Comprehensive security solutions to protect your digital assets"
    }
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleServiceClick = (index) => {
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
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{
                backgroundImage: `url("${slide.image}")`,
              }}
            >
              <div className="slide-content">
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
                
                {/* Services Boxes in Slider */}
                <div className="slider-services-container">
                  {services.map((service, index) => (
                    <div 
                      key={index} 
                      className={`slider-service-box ${index === currentSlide ? 'active' : ''}`}
                      onClick={() => handleServiceClick(index)}
                    >
                      <div className="slider-service-background-square"></div>
                      <div className="slider-service-content">
                        <span className="slider-service-number">{service.number}</span>
                        <h3 className="slider-service-title">{service.title}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          
          {/* Navigation arrows */}
            {/* <button className="nav-btn prev-btn" onClick={prevSlide}>
              ‹
            </button>
            <button className="nav-btn next-btn" onClick={nextSlide}>
              ›
            </button> */}
          
          {/* Dots indicator */}
          <div className="dots-container">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>

   
    </div>
  );
};

export default Innovations;