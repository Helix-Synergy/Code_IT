import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <div className="services-page">
      <div className="services-hero-section">
       <h1
  className="services-main-title"
  style={{ backgroundImage: "url(/Images/servies.webp)" }}
>
  Services
</h1>

      </div>
      
      {/* Digital Transformation */}
      <div className="services-section services-section-reverse">
        <div className="services-img-box">
          <img src="../../public/Images/digital-transformation.webp" alt="Digital Transformation" />
        </div>
    
        <div className="services-text-content">
          <h1 className="services-section-title">Digital Transformation</h1>
          <p className="services-section-description">
            e-Commerce thrives on seamless, scalable IT for online sales and
            CodeIT Consulting, our Digital Transformation services are designed to help businesses embrace innovation and stay competitive in an increasingly tech-driven world. We guide you through the entire transformation journey, from analyzing your current systems to implementing cutting-edge solutions that enhance efficiency, streamline processes, and drive growth. Our team leverages advanced technologies such as cloud computing, AI, and automation to create a seamless digital ecosystem that aligns with your business goals. Whether you're looking to modernize legacy systems or integrate new digital tools, CodeIT Consulting is your trusted partner in transforming your business for the future.
          </p>
        </div>
      </div>
 
      {/* Logistics */}
      <div className="services-section services-section-normal">
        <div className="services-text-content">
          <h1 className="services-section-title">Logistics</h1>
          <p className="services-section-description">
            The logistics industry plays a crucial role in CodeIT Consulting
            by streamlining supply chains, ensuring seamless transportation,
            and optimizing operational efficiency. It offers comprehensive
            solutions like inventory management, warehousing, and distribution
            to enhance business productivity. With a focus on innovation and
            reliability, logistics services help clients achieve timely
            delivery and cost-effective operations. This commitment drives
            success and fosters sustainable growth. The firm also delivers
            robust risk management systems, cloud-based platforms, and
            automated processes to enhance productivity. These innovative
            services empower businesses to make informed decisions and achieve
            financial success in a tech-driven landscape.
          </p>
        </div>
        <div className="services-img-box">
          <img src="../../public/Images/software.webp" alt="Logistics" />
        </div>
      </div>
      
      {/* App Development */}
      <div className="services-section services-section-reverse">
        <div className="services-img-box">
          <img src="../../public/Images/app.webp" alt="App Development" />
        </div>
    
        <div className="services-text-content">
          <h1 className="services-section-title">App Development</h1>
          <p className="services-section-description">
            App Development: Tailored Mobile Solutions for Your Business. In today's mobile-first world, a powerful app can be the key to engaging customers and streamlining operations. CodeIT Consulting specializes in developing custom mobile applications for iOS and Android platforms. We work closely with you to understand your unique requirements, designing intuitive and user-friendly apps that enhance your brand and drive results.

            Our agile approach ensures flexibility and transparency, allowing for continuous feedback and refinement. We conduct rigorous testing and provide ongoing support, ensuring your app launches smoothly and performs flawlessly.
          </p>
        </div>
      </div>
      
      {/* Cyber Security */}
      <div className="services-section services-section-normal">
        <div className="services-text-content">
          <h1 className="services-section-title">Cyber Security</h1>
          <p className="services-section-description">
            In today's interconnected world, cybersecurity is no longer an option—it's a necessity. At CodeIT Consulting, we understand the critical importance of safeguarding your digital assets from evolving threats. Our comprehensive cybersecurity services are designed to provide robust protection, ensuring the confidentiality, integrity, and availability of your valuable data.

            Our experienced cybersecurity professionals stay ahead of the latest threats and technologies, ensuring your business remains protected. We work closely with you to develop a comprehensive security strategy that aligns with your business objectives and regulatory requirements. Partner with CodeIT Consulting to fortify your defenses and build a resilient security posture.
          </p>
        </div>
        <div className="services-img-box">
          <img src="../../public/Images/cyber--security.avif" alt="Cyber Security" />
        </div>
      </div>
      
      {/* Networking */}
      <div className="services-section services-section-reverse">
        <div className="services-img-box">
          <img src="../../public/Images/network-people-digital-world_9975-23272.avif" alt="Networking" />
        </div>
    
        <div className="services-text-content">
          <h1 className="services-section-title">Networking</h1>
          <p className="services-section-description">
            Modernize your network infrastructure with CodeIT Consulting. We specialize in designing and implementing next-generation networks that support cloud integration and digital transformation. Our services include software-defined networking (SDN), network virtualization, and cloud connectivity solutions.

            We specialize in building and maintaining robust network infrastructures that support high performance, scalability, and security. From setting up local area networks (LAN) to managing wide area networks (WAN), our expert team works to optimize connectivity, improve data flow, and reduce downtime. Whether you need network design, implementation, or ongoing management, CodeIT Consulting provides solutions that enhance collaboration, boost productivity, and keep your business connected with ease.
          </p>
        </div>
      </div>
      
      {/* Data Management */}
      <div className="services-section services-section-normal">
        <div className="services-text-content">
          <h1 className="services-section-title">Data Management</h1>
          <p className="services-section-description">
            CodeIT Consulting empowers your business with seamless cloud integration and management. We provide comprehensive cloud services, from migration and deployment to ongoing optimization. Our expertise spans leading cloud platforms, ensuring scalable, secure, and cost-effective solutions. Whether you need to migrate existing infrastructure, develop cloud-native applications, or optimize your cloud environment, we're here to help.

            Maximize the efficiency and cost-effectiveness of your IT infrastructure with CodeIT Consulting's cloud services. We specialize in cloud optimization, ensuring you get the most out of your cloud investments. Our team analyzes your current setup, identifies areas for improvement, and implements solutions that reduce costs and enhance performance. We provide cloud management services, including monitoring, maintenance, and support, allowing you to focus on strategic initiatives.
          </p>
        </div>
        <div className="services-img-box">
          <img src="../../public/Images/data-management.avif" alt="Data Management" />
        </div>
      </div>
    </div>
  )
}

export default Services