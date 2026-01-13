import React from "react";
import { Button } from "react-bootstrap";
import "./Bussiness.css";
import { useNavigate } from "react-router-dom";
const Bussiness = () => {
  const navigate=useNavigate()
  const HandleDiscoverButton = () => {
    navigate("/about")
  };
  return (
    <div className="business-container">
      <div className="business-content">
        <div className="business-stats-section">
          <div className="stats-overlay">
            <div className="stat-item">
              <h2 className="stat-number">2k+</h2>
              <p className="stat-label">Satisfied Clients</p>
            </div>
            <div className="stat-item">
              <h2 className="stat-number">78+</h2>
              <p className="stat-label">Projects Delivered</p>
            </div>
          </div>
        </div>

        <div className="business-info-section">
          <h3 className="business-title" style={{ color: "white" }}>
            A thriving Business led by true Professionals.
          </h3>
          <br />
          <br />
          <ul className="business-list">
            <li style={{ color: "white" }}>
              A Resilient and Strong Brand Identity
            </li>
            <li style={{ color: "white" }}>Finance and Banking Consulting</li>
            <li style={{ color: "white" }}>
              Proven Strategies for Effective Retail Marketing
            </li>
          </ul>
          <Button className="business-button" onClick={HandleDiscoverButton}>
            Discover More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Bussiness;
