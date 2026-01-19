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
  const [activeIndex, setActiveIndex] = useState(0); // Start with first item active

  return (
    <div className="services-wrapper">
      <div className="services-heading">
        <h2>Our Services</h2>
      </div>

      <div className="services-grid">
        {services.map((service, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={index}
              className={`service-card ${isActive ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              {/* Top Number */}
              <div className="service-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Center Image with proper container */}
              <div className="service-image-container">
                <div className="service-image">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className={isActive ? "active-image" : "inactive-image"}
                  />
                </div>
              </div>

              {/* Vertical Text - Better positioned */}
              <div className="service-title">
                <h6>{service.title}</h6>
              </div>

              {/* Overlay for active - More prominent like second image */}
              {isActive && (
                <div className="service-overlay">
                  <h3>{service.title}</h3>
                  <div className="active-indicator"></div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurServices;