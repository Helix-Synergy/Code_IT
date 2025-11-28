import React from "react";
import "./Marquee1.css";

const Marquee1 = () => {
  return (
    <div className="marquee-container">
      <div className="marquee-content">
        <div className="marquee-track">
          {/* First set of images with labels */}
          <div className="marquee-item">
            <img src="/Images/image.png" alt="Company Logo" />
            {/* <span className="logo-label">IDAST</span> */}
          </div>
          <div className="marquee-item">
            <img src="/Images/Peptides-FInal-Logo.webp" alt="Peptides Logo" />
            {/* <span className="logo-label">
              PEPTIDES
              <br />
              Research Labs
            </span> */}
          </div>
          <div className="marquee-item">
            <img src="/Images/digi-grow.webp" alt="Digi Grow Logo" />
            {/* <span className="logo-label">DIGICRO</span> */}
          </div>
          <div className="marquee-item">
            <img src="/Images/finallogo-e1707385272842.webp" alt="Final Logo" />
            {/* <span className="logo-label">Helix Conferences</span> */}
          </div>
          <div className="marquee-item">
            <img src="/Images/fynn-logo.webp" alt="Fynn Logo" />
            {/* <span className="logo-label">FYNN</span> */}
          </div>
          <div className="marquee-item">
            <img
              src="/Images/govt-removebg-preview.webp"
              alt="Government Logo"
            />
            {/* <span className="logo-label">Government</span> */}
          </div>
          <div className="marquee-item">
            <img src="/Images/roast-logo.webp" alt="Roast Logo" />
            {/* <span className="logo-label">ROAST</span> */}
          </div>

          {/* Duplicate set for seamless loop */}
          <div className="marquee-item">
            <img src="/Images/image.png" alt="Company Logo" />
            {/* <span className="logo-label">IDAST</span> */}
          </div>
          <div className="marquee-item">
            <img src="/Images/Peptides-FInal-Logo.webp" alt="Peptides Logo" />
            {/* <span className="logo-label">
              PEPTIDES
              <br />
              Research Labs
            </span> */}
          </div>
          <div className="marquee-item">
            <img src="/Images/digi-grow.webp" alt="Digi Grow Logo" />
            {/* <span className="logo-label">DIGICRO</span> */}
          </div>
          <div className="marquee-item">
            <img src="/Images/finallogo-e1707385272842.webp" alt="Final Logo" />
            {/* <span className="logo-label">Helix Conferences</span> */}
          </div>
          <div className="marquee-item">
            <img src="/Images/fynn-logo.webp" alt="Fynn Logo" />
            {/* <span className="logo-label">FYNN</span> */}
          </div>
          <div className="marquee-item">
            <img
              src="/Images/govt-removebg-preview.webp"
              alt="Government Logo"
            />
            {/* <span className="logo-label">Government</span> */}
          </div>
          <div className="marquee-item">
            <img src="/Images/roast-logo.webp" alt="Roast Logo" />
            {/* <span className="logo-label">ROAST</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marquee1;
