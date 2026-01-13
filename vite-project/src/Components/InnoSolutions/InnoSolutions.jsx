import React, { useState } from "react";
import "./InnoSolutions.css";

const InnoSolutions = () => {
  const [activeSolution, setActiveSolution] = useState(1);

  const solutions = [
    {
      id: 1,
      title: "Information Technology",
      description:
        "Code It Consulting's finance services streamline and optimize financial operations.",
      image: "/Images/InnoSolutions/Inno1.jpg",
      bgColor: "#f0f7ff",
    },
    {
      id: 2,
      title: "Health Care",
      description:
        "Healthcare requires secure, interoperable IT for patient data and compliance.",
      image: "/Images/InnoSolutions/img2.jpg",
      bgColor: "#f0fff4",
    },
    {
      id: 3,
      title: "Banking",
      description:
        "Code It Consulting's Banking Services streamline and optimize financial operations.",
      image: "/Images/InnoSolutions/img3.webp",
      bgColor: "#fff8f0",
    },
    {
      id: 4,
      title: "Finance",
      description:
        "Code It Consulting's finance Services streamline and optimize financial operations.",
      image: "/Images/InnoSolutions/img4.jpg",
      bgColor: "#f9f0ff",
    },
  ];

  const activeSolutionData = solutions.find((sol) => sol.id === activeSolution);

  return (
    <div className="inno-solutions">
      <div className="inno-header">
        <p className="inno-subtitle" style={{ color: "white" }}>
          INDUSTRIES WE WORK IN
        </p>
        <div className="inno-title-container">
          <h1 className="inno-title" style={{ color: "white" }}>
            Innovative Solutions for Diverse Industries
          </h1>
          <p className="inno-description" style={{ color: "white" }}>
            We provide innovative and tailored solutions across various
            industries to meet their evolving demands. In finance and banking,
            we enhance security, streamline transactions, and drive
            customer-focused advancements
          </p>
        </div>
      </div>

      {/* Main Container */}
      <div className="solutions-container">
        {/* Numbered Tabs */}
        <div className="solution-tabs">
          {solutions.map((solution) => (
            <button
              key={solution.id}
              className={`solution-tab ${
                activeSolution === solution.id ? "active" : ""
              }`}
              onClick={() => setActiveSolution(solution.id)}
              style={{
                "--bg-color": solution.bgColor,
              }}
              aria-label={`${solution.title} solution tab`}

            >
              <span className="tab-number">
                {solution.id.toString().padStart(2, "0")}
              </span>
              <span className="tab-title">{solution.title}</span>
            </button>
          ))}
        </div>

        {/* Main Image Display */}
        <div className="solution-main-display">
          <div
            className="solution-main-image"
            style={{
              backgroundImage: `url(${activeSolutionData?.image})`,
              backgroundColor: activeSolutionData?.bgColor,
            }}
          >
            <div className="main-image-overlay"></div>
            <div className="solution-main-content">
              <span className="main-number">
                {activeSolutionData?.id.toString().padStart(2, "0")}
              </span>
              <h2 className="main-title">{activeSolutionData?.title}</h2>
              <p className="main-description">
                {activeSolutionData?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnoSolutions;
