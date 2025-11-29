import React from "react";
import "./About.css";
const About = () => {
  return (
    //
    <div className="about-section">
      <div className="about-header" style={{
    backgroundImage: 'url("https://codeitconsulting.co.in/assets/img/about/two/Untitled-design.png")'
  }}>
        <h1 className="about-title" >About Us</h1>
      </div>
      <div className="about-content">
        <div className="about-text">
          <h1 className="about-codeit">About CodeIT</h1>
          <p className="about-description">
            Where innovation meets excellence! We are a trusted technology
            solutions provider, committed to driving business success in the
            digital age. With a focus on digital transformation, we help
            organizations embrace cutting-edge technologies to redefine their
            processes and achieve operational efficiency. Our expertise in
            software development ensures customized, scalable, and
            high-performing solutions tailored to meet your unique business
            needs. Leveraging the power of app development, we create intuitive
            and user-friendly mobile experiences that keep you connected on the
            go. Security is at the heart of what we do. Our cybersecurity
            services protect your valuable data, ensuring a robust defense
            against digital threats. Through networking solutions, we build
            reliable infrastructures that connect businesses seamlessly,
            enhancing collaboration and productivity. Harness the limitless
            potential of the cloud with our cloud services. From migration to
            management, we empower businesses with agility and scalability in
            today's dynamic market. Empowering businesses through innovation, we
            specialize in digital transformation to drive success. Our expertise
            spans software and app development, ensuring tailored solutions for
            every need. Dedicated to robust cybersecurity, we safeguard your
            digital presence. With cutting-edge networking and seamless cloud
            integration, we deliver efficiency and connectivity. Together, let's
            shape the future with technology!
          </p>
        </div>
        <div className="about-image">
          <img
            src="/Images/New folder 1/about1.webp"
            alt="About CodeIT Consulting"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
