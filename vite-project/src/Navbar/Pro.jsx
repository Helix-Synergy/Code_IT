import React from "react";
import { Button } from "react-bootstrap";
import { CheckCircleFill } from "react-bootstrap-icons";
import "./Pro.css"; // Make sure to create this CSS file

const Pro = () => {
  return (
    <div className="pro-container">
      {/* Hero Banner */}
      <div className="hero-banner">
        <h1>Code IT PROD-KIT</h1>
      </div>

      {/* Introduction Section */}
      <div className="section intro-section">
        <div className="intro-content">
          <h1>
            Code IT PROD-KIT: Powering Digital Transformation with Smart SaaS
            Solutions
          </h1>
          <p>
            In the era of automation and digital-first operations, Code IT
            Consulting emerges as a trailblazer with its PROD-KIT, a collection
            of powerful SaaS products crafted to meet the dynamic needs of
            modern businesses. Whether you're a startup or an enterprise, Code
            IT PROD-KIT is your one-stop solution to streamline operations,
            boost productivity, and drive digital excellence
          </p>
          <Button className="cta-button">Call Now</Button>
        </div>
        <div className="intro-image">
          <img src="/Images1/Prod/c-get (1).webp" alt="Code IT PROD-KIT" />
        </div>
      </div>

      {/* Products Section */}
      {/* C-port */}
      <div className="section product-section">
        <div className="product-image">
          <img src="/Images1/Prod/c-port.webp" alt="C-PORT HRMS" />
        </div>
        <div className="product-content">
          <h1>C-PORT – HRMS for Smarter Workforce Management</h1>
          <p>
            C-PORT is a comprehensive HRMS that simplifies hiring, onboarding,
            payroll, attendance, and performance reviews.
          </p>
          <h4>Key Features:</h4>
          <ul className="features-list">
            <li><CheckCircleFill className="list-icon" /> Leave & Attendance Tracking</li>
            <li><CheckCircleFill className="list-icon" /> Payroll Automation</li>
            <li><CheckCircleFill className="list-icon" /> Employee Onboarding</li>
            <li><CheckCircleFill className="list-icon" /> Role-based Access Control</li>
          </ul>
        </div>
      </div>

      {/* C-Care */}
      <div className="section product-section reverse">
        <div className="product-image">
          <img src="/Images1/Prod/c-care.webp" alt="C-CARE Health Management" />
        </div>
        <div className="product-content">
          <h1>C-CARE – Health Management Made Easy</h1>
          <p>
            Designed for clinics, hospitals, and health centers, C-CARE is an all-in-one healthcare management solution.
          </p>
          <h4>Key Features:</h4>
          <ul className="features-list">
            <li><CheckCircleFill className="list-icon" /> Patient Record Management</li>
            <li><CheckCircleFill className="list-icon" /> Appointment Scheduling</li>
            <li><CheckCircleFill className="list-icon" /> e-Prescriptions</li>
            <li><CheckCircleFill className="list-icon" /> Billing & Invoicing</li>
          </ul>
        </div>
      </div>

      {/* C-Raise */}
      <div className="section product-section">
        <div className="product-image">
          <img src="/Images1/Prod/c-raise.webp" alt="C-RAISE Ticketing System" />
        </div>
        <div className="product-content">
          <h1>C-RAISE – Ticketing System for Internal and External Issues</h1>
          <p>
            Handle support and incident requests effortlessly with C-RAISE.
          </p>
          <h4>Key Features:</h4>
          <ul className="features-list">
            <li><CheckCircleFill className="list-icon" /> Ticket Categorization</li>
            <li><CheckCircleFill className="list-icon" /> SLA Management</li>
            <li><CheckCircleFill className="list-icon" /> Chat & Notifications</li>
            <li><CheckCircleFill className="list-icon" /> Analytics Dashboard</li>
          </ul>
        </div>
      </div>

      {/* C-emp */}
      <div className="section product-section reverse">
        <div className="product-image">
          <img src="/Images1/Prod/c-emptor.webp" alt="C-EMPTOR CRM" />
        </div>
        <div className="product-content">
          <h1>C-EMPTOR – Smart CRM Platform</h1>
          <p>
            C-EMPTOR is a clever CRM platform that can increase lead conversion and client retention.
          </p>
          <h4>Key Features:</h4>
          <ul className="features-list">
            <li><CheckCircleFill className="list-icon" /> Lead Management</li>
            <li><CheckCircleFill className="list-icon" /> Sales Funnels</li>
            <li><CheckCircleFill className="list-icon" /> Email & SMS Campaigns</li>
            <li><CheckCircleFill className="list-icon" /> Client History & Analytics</li>
          </ul>
        </div>
      </div>

      {/* C-Trans */}
      <div className="section product-section">
        <div className="product-image">
          <img src="/Images1/Prod/c-trans.webp" alt="C-TRANS Transportation" />
        </div>
        <div className="product-content">
          <h1>C-TRANS – Transportation Tracking & Management</h1>
          <p>
            Optimize logistics with C-TRANS, perfect for fleet management and route tracking.
          </p>
          <h4>Key Features:</h4>
          <ul className="features-list">
            <li><CheckCircleFill className="list-icon" /> Real-Time Vehicle Tracking</li>
            <li><CheckCircleFill className="list-icon" /> Route Optimization</li>
            <li><CheckCircleFill className="list-icon" /> Driver App Integration</li>
            <li><CheckCircleFill className="list-icon" /> Fuel Monitoring</li>
          </ul>
        </div>
      </div>

      {/* C-viand */}
      <div className="section product-section reverse">
        <div className="product-image">
          <img src="/Images1/Prod/c-viand.webp" alt="C-VIAND Food Management" />
        </div>
        <div className="product-content">
          <h1>C-VIAND – Food Inventory & Distribution for Enterprises</h1>
          <p>
            Food businesses rejoice! C-VIAND manages food stock, delivery chains, and compliance checks
          </p>
          <h4>Key Features:</h4>
          <ul className="features-list">
            <li><CheckCircleFill className="list-icon" /> Recipe & Ingredient Mapping</li>
            <li><CheckCircleFill className="list-icon" /> Inventory & Wastage Tracking</li>
            <li><CheckCircleFill className="list-icon" /> Vendor Orders</li>
            <li><CheckCircleFill className="list-icon" /> Nutrition Labels</li>
          </ul>
        </div>
      </div>

      {/* C-Lit */}
      <div className="section product-section">
        <div className="product-image">
          <img src="/Images1/Prod/c-lit.webp" alt="C-LIT Educational ERP" />
        </div>
        <div className="product-content">
          <h1>C-LIT – Educational ERP for Schools and Colleges</h1>
          <p>
            Modernize education with C-LIT, an ERP built for learning institutions.
          </p>
          <h4>Key Features:</h4>
          <ul className="features-list">
            <li><CheckCircleFill className="list-icon" /> Admissions & Fee Collection</li>
            <li><CheckCircleFill className="list-icon" /> Timetable & Exams</li>
            <li><CheckCircleFill className="list-icon" /> Attendance & Report Cards</li>
            <li><CheckCircleFill className="list-icon" /> Parent-Teacher Communication</li>
          </ul>
        </div>
      </div>

      {/* C-Track */}
      <div className="section product-section reverse">
        <div className="product-image">
          <img src="/Images1/Prod/c-track.webp" alt="C-TRACK Location Tracking" />
        </div>
        <div className="product-content">
          <h1>C-TRACK – Location Tracking for People, Assets, and Vehicles</h1>
          <p>
            Stay in control with C-TRACK, a GPS-based real-time tracking system
          </p>
          <h4>Key Features:</h4>
          <ul className="features-list">
            <li><CheckCircleFill className="list-icon" /> Geo-fencing Alerts</li>
            <li><CheckCircleFill className="list-icon" /> Historical Route Mapping</li>
            <li><CheckCircleFill className="list-icon" /> Asset Tracking Dashboard</li>
            <li><CheckCircleFill className="list-icon" /> Wearable Integration</li>
          </ul>
        </div>
      </div>

      {/* C-get */}
      <div className="section product-section">
        <div className="product-image">
          <img src="/Images1/Prod/c-get (1).webp" alt="C-GET E-commerce" />
        </div>
        <div className="product-content">
          <h1>C-GET – E-commerce Software for Online Sellers</h1>
          <p>
            Launch your online store in minutes using C-GET, a complete e-commerce engine.
          </p>
          <h4>Key Features:</h4>
          <ul className="features-list">
            <li><CheckCircleFill className="list-icon" /> Product Listings</li>
            <li><CheckCircleFill className="list-icon" /> Order & Payment Management</li>
            <li><CheckCircleFill className="list-icon" /> Promo Coupons</li>
            <li><CheckCircleFill className="list-icon" /> Mobile-Friendly Storefront</li>
          </ul>
        </div>
      </div>

      {/* C-assist */}
      <div className="section product-section reverse">
        <div className="product-image">
          <img src="/Images1/Prod/c-assist.webp" alt="C-ASSIST Custom Software" />
        </div>
        <div className="product-content">
          <h1>C-ASSIST – Custom Software for Specialized Needs</h1>
          <p>
            Need something tailor-made? C-ASSIST enables you to develop custom software tailored to your workflow
          </p>
          <h4>Key Features:</h4>
          <ul className="features-list">
            <li><CheckCircleFill className="list-icon" /> Custom UI/UX Modules</li>
            <li><CheckCircleFill className="list-icon" /> API-Ready Backend</li>
            <li><CheckCircleFill className="list-icon" /> Database Integration</li>
            <li><CheckCircleFill className="list-icon" /> Scalable Microservices Architecture</li>
          </ul>
        </div>
      </div>

      {/* Footer Section */}
      <div className="footer-section">
        <h2 style={{color:"black"}}>Why Choose Code IT SaaS Solutions?</h2>
        <p style={{color:"black"}}>Here's why our CODE IT PROD-KIT stands out:</p>
        <ul className="features-list" style={{color:"black", marginLeft:"600px"}}>
          <li style={{color:"black"}}><CheckCircleFill className="list-icon" /> Scalable & Modular</li>
          <li style={{color:"black"}}><CheckCircleFill className="list-icon" /> Secure Cloud Infrastructure</li>
          <li style={{color:"black"}}><CheckCircleFill className="list-icon" /> AI-Enabled Automation</li>
          <li style={{color:"black"}}><CheckCircleFill className="list-icon" /> Customizable Interfaces</li>
          <li style={{color:"black"}}><CheckCircleFill className="list-icon" /> Mobile-Responsive Designs</li>
          <li style={{color:"black"}}><CheckCircleFill className="list-icon" /> API-Ready for Integration</li>
        </ul>
        <Button className="cta-button">Book a Free Consultation</Button>
      </div>
    </div>
  );
};

export default Pro;