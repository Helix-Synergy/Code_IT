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
const navigate=useNavigate()
 const  HandleAbout=()=>{
navigate("/about")
 }
const HandlesService=()=>{
navigate("/service")
}
const HandleIndu=()=>{
  navigate("/Academia")
}
const HandlePr=()=>{
  navigate("/products")
}
const HandleCont=()=>{
  navigate("/contact")
}
const HandleDigi=()=>{
  navigate("/digital-transformation")
}
  return (
    <div className="footer-container">

      {/* -------- LEFT SECTION -------- */}
      <div className="footer-left">
        <img src="../../../public/Images/Header-Final-Logo.webp" alt="" />
        <p>
          Transform your business with cutting-edge Information
          Technology solutions. From tailored advanced cybersecurity measures,
          IT powers innovation and efficiency.
        </p>

        <div className="footer-socials">
          <FaFacebookF />
          <BsTwitterX />
          <IoLogoInstagram />
          <FaLinkedin />
        </div>
      </div>

      {/* -------- SERVICES -------- */}
      <div className="footer-col">
        <h2 >Service</h2>
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
        <h6>Home</h6>
        <h6 onClick={HandleAbout}>About Us</h6>
        <h6 onClick={HandlesService}>Services</h6>
        <h6 onClick={HandleIndu}>Industries</h6>
        <h6 onClick={HandlePr}>Products</h6>
        <h6  onClick={HandleCont}>Contact</h6>
      </div>

      {/* -------- NEWSLETTER -------- */}
      <div className="footer-newsletter">
        <h2>Newsletter</h2>
        <p>Feel free to reach out if you want to collaborate with us, or simply chat.</p>

        <div className="newsletter-box">
          <LuMail className="mail-icon" />
          <input placeholder="Enter your email" />
          <BsSend className="send-icon" />
        </div>
      </div>

      {/* -------- BOTTOM SECTION -------- */}
      <div className="footer-bottom">
        <h5>© 2025 CodeIT Consulting</h5> 
        <h5>Privacy & Cookie Policy</h5>
      </div>
    </div>
  )
}

export default Footer