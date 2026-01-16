import React, { useState } from "react";
import "./OurServices.css";

const services = [
  {
    title: "DIGITAL TRANSFORMATION",
    image: "/Images/InnoSolutions/digital-transformation.avif",
  },
  {
    title: "SOFTWARE DEVELOPMENT",
    image: "/Images/InnoSolutions/software-development.avif",
  },
  {
    title: "APP DEVELOPMENT",
    image: "/Images/InnoSolutions/app-development.avif",
  },
  {
    title: "CYBER SECURITY",
    image: "/Images/InnoSolutions/cyber-security.avif",
  },
  {
    title: "NETWORKING",
    image: "/Images/InnoSolutions/networking.avif",
  },
  {
    title: "DATA MANAGEMENT",
    image: "/Images/InnoSolutions/data-management.avif",
  },
];

const OurServices = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="services-wrapper">
      <div className="services-container">
        {/* LEFT SIDE - SERVICE TITLES */}
        <div className="services-titles">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-title-item ${
                index === activeIndex ? "active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <h5>{service.title}</h5>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE - IMAGE DISPLAY */}
        <div className="services-image-container">
          <div className="image-box">
            <img src={services[activeIndex].image} alt={services[activeIndex].title} />
          </div>
          
          {/* OVERLAY TEXT (Optional - if you want text on image too) */}
          <div className="image-overlay">
            <h2>{services[activeIndex].title}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;