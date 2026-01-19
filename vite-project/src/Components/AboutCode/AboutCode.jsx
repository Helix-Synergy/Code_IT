import React from 'react'
import "./AboutCode.css"

const AboutCode = () => {
  return (
    <div className="about-code-container">
      <div className="about-code-content">
        <h1 className="about-code-title">About Code IT</h1>
        <p className="about-code-description">Code IT Consulting is a leading technology solutions provider dedicated to empowering businesses with innovative and customized software development services. Our team of experts specializes in delivering scalable and efficient IT solutions tailored to meet your specific needs. Whether you're looking for Web development, Mobile app creation, or Cloud solutions, we bring a wealth of Industry knowledge to every project. At Code IT Consulting, We focus on driving Digital transformation, enhancing operational efficiency, and helping businesses stay ahead in the competitive landscape. Partner with us to turn your technology challenges into opportunities for growth and success.</p>
        
     

        <div className="about-code-success">
          <h2 className="success-title">Our Success</h2>
          <p className="success-description">We continuously strive for success, built on a strong foundation of innovation, teamwork, and an unwavering commitment to excellence. We take pride in delivering value to our customers, empowering our employees, and making a positive impact on the communities we serve.</p>
          
          <div className="success-metrics">
            <div className="metric-item">
              <div className="metric-label">Projects Delivered</div>
              <div className="metric-progress-bar">
                <div className="metric-progress-fill" style={{width: '68%'}}>
                  <span className="metric-percentage">68%</span>
                </div>
              </div>
            </div>
            
            <div className="metric-item">
              <div className="metric-label">Satisfied Clients</div>
              <div className="metric-progress-bar">
                <div className="metric-progress-fill" style={{width: '93%'}}>
                  <span className="metric-percentage">93%</span>
                </div>
              </div>
            </div>
            
            <div className="metric-item">
              <div className="metric-label">Our Company Growth</div>
              <div className="metric-progress-bar">
                <div className="metric-progress-fill" style={{width: '77%'}}>
                  <span className="metric-percentage">77%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Image Section */}
      <div className="about-code-image">
   <img src="../../../public/Images/aboutCodeIT.jpg" alt="About Code IT Consulting" />

      </div>
    </div>
  )
}

export default AboutCode