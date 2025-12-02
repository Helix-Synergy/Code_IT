import React, { useState } from 'react';
import './OurServices.css';

const OurServices = () => {
  const [activeImage, setActiveImage] = useState("/Images/InnoSolutions/digital-transformation.avif");

  return (
    <div className="services-wrapper">

      <div className="services-left">
        <div className="service-column" onClick={() => setActiveImage("/Images/InnoSolutions/digital-transformation.avif")}>
          <h5>DIGITAL TRANSFORMATION</h5>
        </div>

        <div className="service-column" onClick={() => setActiveImage("/Images/InnoSolutions/software-development.avif")}>
          <h5>SOFTWARE DEVELOPMENT</h5>
        </div>

        <div className="service-column" onClick={() => setActiveImage("../../../public/Images/InnoSolutions/app-development.avif")}>
          <h5>APP DEVELOPMENT</h5>
        </div>

        <div className="service-column" onClick={() => setActiveImage("../../../public/Images/InnoSolutions/cyber-security.avif")}>
          <h5>CYBER SECURITY</h5>
        </div>

        <div className="service-column" onClick={() => setActiveImage("/Images/InnoSolutions/networking.avif")}>
          <h5>NETWORKING</h5>
        </div>

        <div className="service-column" onClick={() => setActiveImage("../../../public/Images/InnoSolutions/data-management.avif")}>
          <h5>DATA MANAGEMENT</h5>
        </div>
      </div>

      <div className="services-right">
        <img src={activeImage} alt="Selected" />
      </div>

    </div>
  );
};

export default OurServices;
