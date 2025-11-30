import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import "../Home/Home.css"
const Navbar2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);
    }

    window.googleTranslateElementInit = () => {
      const translateElement = document.getElementById(
        "google_translate_element"
      );
      translateElement.innerHTML = "";

      new window.google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
      );
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <header className="home-header">

        {/* Logo */}
        <div className="logo">
          <img
            src="/Images/WhatsApp Image 2025-11-27 at 14.02.01_88f46c57.jpg"
            alt="Logo"
          />
        </div>

        {/* Navigation */}
        <nav className="home-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          {/* <Link to="/service">Services</Link> */}
          <div className="dropdown">
  <span className="dropbtn" style={{color:"#ddd"}}>Services ▾</span>

  <div className="dropdown-content">
    <Link to="/digital-transformation">Digital Transformation</Link>
    <Link to="/software-development">Software Development</Link>
    <Link to="/app-development">App Development</Link>
    <Link to="/cyber-security">Cyber Security</Link>
    <Link to="/networking">Networking</Link>
    <Link to="/data-management">Data Management</Link>
  </div>
</div>
          <Link to="/Academia">Academia</Link>
          <Link to="/pro">Prod-Kit</Link>
        {/* <div className="dropdown-container">
  <Link to="/industries">Industries ▾</Link>

  <div className="dropdown-menu">
    <Link to="/industries/it">Information Technology</Link>
    <Link to="/industries/healthcare">Health Care</Link>
    <Link to="/industries/banking">Banking</Link>
    <Link to="/industries/finance">Finance</Link>
    <Link to="/industries/education">Education</Link>
    <Link to="/industries/retail">Retail</Link>
    <Link to="/industries/manufacturing">Manufacturing</Link>
    <Link to="/industries/ecommerce">E-Commerce</Link>
    <Link to="/industries/logistics">Logistics</Link>
  </div>
</div> */}<div className="dropdown-industries">
  <span className="dropbtn-industries" style={{color:"#ddd"}}>Industries ▾</span>

  <div className="dropdown-content-industries">
    <Link to="/industries/it">Information Technology</Link>
    <Link to="/industries/healthcare">Health Care</Link>
    <Link to="/industries/banking">Banking</Link>
    <Link to="/industries/finance">Finance</Link>
    <Link to="/industries/education">Education</Link>
    <Link to="/industries/retail">Retail</Link>
    <Link to="/industries/manufacturing">Manufacturing</Link>
    <Link to="/industries/ecommerce">E-Commerce</Link>
    <Link to="/industries/logistics">Logistics</Link>
  </div>
</div>

          <Link to="/contact">Contact</Link>
        </nav>

        {/* Mobile Menu Icon */}
        <div
          className="mobile-menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <IoMdMenu />
        </div>

        {/* Right Section */}
        <div className="right-section">
          <button className="call-btn">+91 8985998978</button>
          <div id="google_translate_element" className="translate-box"></div>
        </div>
      </header>

      {/* Mobile Dropdown */}
      <div className={`mobile-dropdown ${menuOpen ? "show-menu" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
        <Link to="/service" onClick={() => setMenuOpen(false)}>Services</Link>
        <Link to="/Academia" onClick={() => setMenuOpen(false)}>Academia</Link>
        <Link to="/pro" onClick={() => setMenuOpen(false)}>Prod-Kit</Link>
        <Link to="/industries" onClick={() => setMenuOpen(false)}>Industries</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>
    </>
  );
};

export default Navbar2;
