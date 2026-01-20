import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs"
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";
import { BsSend } from "react-icons/bs";
import "./Footer.css";
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const HandleHome = () => {
    navigate("/");
    scrollTop();
  };

  const HandleAbout = () => {
    navigate("/about");
    scrollTop();
  };

  const HandlesService = () => {
    navigate("/service");
    scrollTop();
  };

  const HandleIndu = () => {
    navigate("/Academia");
    scrollTop();
  };

  const HandlePr = () => {
    navigate("/products");
    scrollTop();
  };

  const HandleCont = () => {
    navigate("/contact");
    scrollTop();
  };

  const HandleDigi = () => {
    navigate("/digital-transformation");
    scrollTop();
  };

  return (
    <div className="footer-container">

      {/* -------- LEFT SECTION -------- */}
      <div className="footer-left">
        <img src="/Images/HomeImage.png" alt="Code IT Consulting logo" />
        <br />
        <br />
        <p>
          Transform your business with cutting-edge Information
          Technology solutions.
        </p>

    <div className="footer-socials">
  <a
    href="https://www.facebook.com/profile.php?id=61574737298330"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaFacebookF />
  </a>

  <a
    href="https://x.com/CodeIT_co"
    target="_blank"
    rel="noopener noreferrer"
  >
    <BsTwitterX />
  </a>

  <a
    href="https://www.instagram.com/code.it.consulting/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <IoLogoInstagram />
  </a>

  <a
    href="https://www.linkedin.com/in/codeit-consulting2/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedin />
  </a>
</div>

      </div>

      {/* -------- SERVICES -------- */}
      <div className="footer-col">
        <h2>Service</h2>
        <h6 onClick={HandleDigi}>Digital Transformation</h6>
        <h6 onClick={HandleDigi}>Software Development</h6>
        <h6 onClick={HandleDigi}>App Development</h6>
        <h6 onClick={HandleDigi}>Cyber Security</h6>
        <h6 onClick={HandleDigi}>Networking</h6>
        <h6 onClick={HandleDigi}>Data Management</h6>
      </div>

      {/* -------- COMPANY -------- */}
      <div className="footer-col">
        <h2>Company</h2>
        <h6 onClick={HandleHome}>Home</h6>
        <h6 onClick={HandleAbout}>About Us</h6>
        <h6 onClick={HandlesService}>Services</h6>
        <h6 onClick={HandleIndu}>Industries</h6>
        <h6 onClick={HandlePr}>Products</h6>
        <h6 onClick={HandleCont}>Contact</h6>
      </div>

      {/* -------- NEWSLETTER -------- */}
      <div className="footer-newsletter">
        <h2>Newsletter</h2>
        <p>Feel free to reach out if you want to collaborate with us, or simply chat.</p>

    <div className="newsletter-box">
  <LuMail className="mail-icon" />
  <label for="email-input" class="visually-hidden">Email address</label>
  <input 
    id="email-input"
    type="email"
    placeholder="Enter your email"
    aria-label="Enter your email address"
  />
  <BsSend className="send-icon" />
</div>
      </div>

      {/* -------- BOTTOM SECTION -------- */}
      <div className="footer-bottom">
        <h5>© 2026 Code IT Consulting</h5> 
        <h5>Privacy & Cookie Policy</h5>
      </div>

    </div>
  )
}

export default Footer;
