import React, { useEffect, useState } from "react";
import WOW from "wowjs";
import "animate.css";

const services = [
  { id: 1, title: "DIGITAL TRANSFORMATION", image: "/Images/InnoSolutions/digital-transformation.avif", delay: "0ms" },
  { id: 2, title: "SOFTWARE DEVELOPMENT", image: "/Images/InnoSolutions/software-development.avif", delay: "200ms" },
  { id: 3, title: "APP DEVELOPMENT", image: "/Images/InnoSolutions/app-development.avif", delay: "400ms" },
  { id: 4, title: "CYBER SECURITY", image: "/Images/InnoSolutions/cyber-security.avif", delay: "600ms" },
  { id: 5, title: "NETWORKING", image: "/Images/InnoSolutions/networking.avif", delay: "800ms" },
  { id: 6, title: "DATA MANAGEMENT", image: "/Images/InnoSolutions/data-management.avif", delay: "1000ms" },
];

const ServicesAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    new WOW.WOW({ live: false }).init();
  }, []);

  return (
    <section className="hzAccordion-area py-32 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="section-header mb-16 text-center">
          <h2 className="wow splt-txt text-white text-4xl font-bold" data-splitting="">
            Our Services
          </h2>
        </div>

        {/* Horizontal Accordion */}
        <div className="hzAccordion__wrp flex space-x-6 overflow-x-auto scroll-smooth scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
          {services.map((service, index) => (
            <div
              key={service.id}
              onClick={() => setActiveIndex(index)}
              className={`hzAccordion__item min-w-[280px] bg-gray-800 rounded-xl shadow-lg flex-shrink-0 transform transition-transform duration-500 cursor-pointer
                ${activeIndex === index ? "scale-105 border-2 border-blue-500" : "scale-100"}
                wow fadeInLeft`}
              data-wow-delay={service.delay}
              data-wow-duration="1500ms"
            >
              {/* Head */}
              <div className="head flex justify-between items-center p-4 border-b border-gray-700">
                <h3 className="head-title text-lg font-bold text-white">
                  <span className="title">{service.title}</span>
                </h3>
                <span className="number text-blue-500 font-bold text-xl">{service.id}</span>
              </div>

              {/* Content */}
              <div className="content p-4">
                <div className="wrp">
                  <div className="content-wrp mb-4">
                    <a
                      className="arry-btn inline-block p-2 text-blue-500 hover:text-blue-400 transition-colors"
                      href="page-service-details.html"
                    >
                      <i className="fa-thin fa-arrow-up-right"></i>
                    </a>
                  </div>

                  <div className="image">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-40 object-cover rounded-lg mt-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesAccordion;
