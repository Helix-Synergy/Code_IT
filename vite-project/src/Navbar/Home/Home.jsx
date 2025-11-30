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

const Home = () => {
  return (
    <div>
      <br />

      <Innovations />
      <Vision />
      <AboutCode />
      <Technologies />
      <Marquee1 />
    </div>
  );
};

export default Home;
