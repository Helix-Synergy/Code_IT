import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import Footer from "../../Components/Footer/Footer";
import Marquee1 from "../../Components/Marquee/Marquee1.jsx";
import Technologies from "../../Components/Technologies/Technologies.jsx";
import Innovations from "../../Components/Innovations/Innovations.jsx";
import Vision from "../../Components/Vision/Vision.jsx";
import AboutCode from "../../Components/AboutCode/AboutCode.jsx";

// Menu Icon
import { IoMdMenu } from "react-icons/io";
import InnoSolutions from "../../Components/InnoSolutions/InnoSolutions.jsx";
import Contact2 from "../../Components/Contact2/Contact2.jsx";
import Bussiness from "../../Components/Bussiness/Bussiness.jsx";
import OurServices from "../../Components/OurServices/OurServices.jsx";

const Home = () => {
  return (
    <div>
      <br />

      <Innovations />
      <Vision />
      <AboutCode />
      <OurServices/>
      <Bussiness/>
      <InnoSolutions/>
      <Technologies />
      <Contact2/>
      <br />
      <Marquee1 />
    </div>
  );
};

export default Home;
