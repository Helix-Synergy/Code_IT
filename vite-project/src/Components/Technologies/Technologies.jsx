import React from "react";
import { Card, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Technlogies.css"; 

const Technologies = () => {
  return (
    <div className="technologies-section">
      <h2 className="section-title">TECHNOLOGIES @ CODE IT</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={25}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },   // mobile
          768: { slidesPerView: 2, spaceBetween: 20 },   // tablet
          1024: { slidesPerView: 3, spaceBetween: 25 },  // laptop
        }}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <Card className="tech-card">
            <Card.Img variant="top" src="/Images/rpa.avif" />
            <Card.Body>
              <Card.Title>Robotic Process Automation (RPA)</Card.Title>
              <Card.Text>
                Software robots mimic human actions, handling data entry,
                processing, and more. Free up your workforce for strategic work
                and reduce errors. Scale operations effortlessly and accelerate
                digital transformation.
              </Card.Text>
              <Button variant="primary">View More</Button>
            </Card.Body>
          </Card>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <Card className="tech-card">
            <Card.Img variant="top" src="/Images/cyber--security.avif" />
            <Card.Body>
              <Card.Title>Cybersecurity</Card.Title>
              <Card.Text>
               Protect, secure, and actively defend. Powering advanced multi-factor authentication, robust encryption protocols, and proactive threat detection systems. Unlock new possibilities for businesses, enterprises, and digital operations.
              </Card.Text>
              <Button variant="primary">View More</Button>
            </Card.Body>
          </Card>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <Card className="tech-card">
            <Card.Img variant="top" src="/Images/ai-ml.avif" />
            <Card.Body>
              <Card.Title>AI & ML</Card.Title>
              <Card.Text>
                AI simulates human intelligence, while ML enables systems to
                learn from data. Drive automation, personalization, and
                predictive analytics. Unlock innovation and gain a competitive
                edge with smart technologies.
              </Card.Text>
              <Button variant="primary">View More</Button>
            </Card.Body>
          </Card>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <Card className="tech-card">
            <Card.Img variant="top" src="/Images/iot.avif" />
            <Card.Body>
              <Card.Title>5G / IoT</Card.Title>
              <Card.Text>
                Experience lightning-fast speeds and ultra-low latency.
                Powering seamless streaming, immersive AR/VR, and smart city
                innovations. Unlock new possibilities for businesses and
                consumers alike.
              </Card.Text>
              <Button variant="primary">View More</Button>
            </Card.Body>
          </Card>
        </SwiperSlide>

        {/* Slide 5 */}
        <SwiperSlide>
          <Card className="tech-card">
            <Card.Img variant="top" src="/Images/blockchain.avif" />
            <Card.Body>
              <Card.Title>Blockchain Technology</Card.Title>
              <Card.Text>
          Immutable, transparent, and highly reliable. Powering automated agreements, secure financial transactions, and end-to-end data traceability. Unlock new possibilities for businesses, enterprises, and industries alike.
              </Card.Text>
              <Button variant="primary">View More</Button>
            </Card.Body>
          </Card>
        </SwiperSlide>

        {/* Slide 6 */}
        <SwiperSlide>
          <Card className="tech-card">
            <Card.Img variant="top" src="/Images/ar-vr.avif" />
            <Card.Body>
              <Card.Title>AR & VR</Card.Title>
              <Card.Text>
              Elevate experiences with interactive product demos and virtual tours. Powering realistic, risk-free employee training and immersive marketing simulations. Unlock new possibilities for businesses and consumers alike.
              </Card.Text>
              <Button variant="primary">View More</Button>
            </Card.Body>
          </Card>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Technologies;
