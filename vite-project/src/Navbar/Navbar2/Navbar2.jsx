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
          <Link to="/service">Services</Link>
          <Link to="/Academia">Academia</Link>
          <Link to="/pro">Prod-Kit</Link>
          <Link to="/industries">Industries</Link>
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
