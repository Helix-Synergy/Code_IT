import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Footer from "../../Components/Footer/Footer";
import Marquee1 from "../../Components/Marquee/Marquee1.jsx"
import Technologies from '../../Components/Technologies/Technologies.jsx'
import Innovations from '../../Components/Innovations/Innovations.jsx'
import Vision from "../../Components/Vision/Vision.jsx";
const Home = () => {

  useEffect(() => {
    // Prevent multiple script injections
    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);
    }

    // Prevent multiple translator dropdowns
    window.googleTranslateElementInit = () => {
      const translateElement = document.getElementById("google_translate_element");

      // Clear old dropdowns
      translateElement.innerHTML = "";

      new window.google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
      );
    };
  }, []);

  return (
    <div className="home-section">

      {/* Navbar */}
      <header className="home-header">

        {/* Logo */}
        <div className="logo">
          <img
            src="/Images/WhatsApp Image 2025-11-27 at 14.02.01_88f46c57.jpg"
            alt="Logo"
          />
        </div>

        {/* Nav Links */}
        <nav className="home-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/service">Services</Link>
          <Link to="/Academia">Academia</Link>
          <Link to="/pro">Prod-Kit</Link>
          <Link to="/industries">Industries</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Translate + Number */}
        <div className="right-section">
          <button className="call-btn">+91 8985998978</button>

          <div id="google_translate_element" className="translate-box"></div>
        </div>

      </header>
<br />

       <Innovations/>
       <Vision/>
   <Technologies/>
 <Marquee1/>
    </div>
  );
};

export default Home;
