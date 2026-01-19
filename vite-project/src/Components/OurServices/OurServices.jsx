// import React, { useState } from "react";
// import "./OurServices.css";

// const services = [
//   {
//     title: "DIGITAL TRANSFORMATION",
//     image: "/Images/InnoSolutions/digital-transformation.avif",
//   },
//   {
//     title: "SOFTWARE DEVELOPMENT",
//     image: "/Images/InnoSolutions/software-development.avif",
//   },
//   {
//     title: "APP DEVELOPMENT",
//     image: "/Images/InnoSolutions/app-development.avif",
//   },
//   {
//     title: "CYBER SECURITY",
//     image: "/Images/InnoSolutions/cyber-security.avif",
//   },
//   {
//     title: "NETWORKING",
//     image: "/Images/InnoSolutions/networking.avif",
//   },
//   {
//     title: "DATA MANAGEMENT",
//     image: "/Images/InnoSolutions/data-management.avif",
//   },
// ];

// const OurServices = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <div className="services-wrapper">
//       <h2 className="services-heading">Our Services</h2>

//       <div className="services-row">
//         {services.map((service, index) => {
//           const isActive = activeIndex === index;

//           return (
//             <div key={index} className="service-pair">
//               {/* VERTICAL TEXT */}
//               <div
//                 className={`vertical-item ${isActive ? "active" : ""}`}
//                 onClick={() => setActiveIndex(index)}
//               >
//                 <span className="vertical-number">
//                   {String(index + 1).padStart(2, "0")}
//                 </span>

//                 <span className="vertical-text">{service.title}</span>
//               </div>

//               {/* IMAGE NEXT RIGHT */}
//               <div className={`inline-image ${isActive ? "show" : ""}`}>
//                 <img src={service.image} alt={service.title} />
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default OurServices;
// ------------copy start from here ----------
import React, { useState } from "react";
import "./OurServices.css";

const services = [
  {
    title: "DIGITAL TRANSFORMATION",
    image: "/Images/InnoSolutions/digital-transformation.avif",
  },
  {
    title: "SOFTWARE DEVELOPMENT",
    image: "/Images/InnoSolutions/software-development.avif",
  },
  {
    title: "APP DEVELOPMENT",
    image: "/Images/InnoSolutions/app-development.avif",
  },
  {
    title: "CYBER SECURITY",
    image: "/Images/InnoSolutions/cyber-security.avif",
  },
  {
    title: "NETWORKING",
    image: "/Images/InnoSolutions/networking.avif",
  },
  {
    title: "DATA MANAGEMENT",
    image: "/Images/InnoSolutions/data-management.avif",
  },
];

const OurServices = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="services-wrapper">
      <h2 className="services-heading">Our Services</h2>

      <div className="services-row">
        {services.map((service, index) => {
          const isActive = activeIndex === index;

          return (
            <div key={index} className="service-pair">
              {/* VERTICAL TEXT */}
              <div
                className={`vertical-item ${isActive ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
              >
                <span className="vertical-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="vertical-text">{service.title}</span>
              </div>

              {/* IMAGE NEXT RIGHT */}
              <div className={`inline-image ${isActive ? "show" : ""}`}>
                <img src={service.image} alt={service.title} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurServices;

