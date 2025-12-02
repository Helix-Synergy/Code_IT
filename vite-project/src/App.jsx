import React from "react";
import Home from "./Navbar/Home/Home";
import About from "./Navbar/About.jsx";
import Services from "./Navbar/Services.jsx";
import Academics from "./Navbar/Academics.jsx";
import Pro from "./Navbar/Pro.jsx";
import Industries from "./Navbar/Industries.jsx";
import Contact from "./Navbar/Contact.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer/Footer.jsx";
import Navbar2 from "./Navbar/Navbar2/Navbar2.jsx";
import It from "./Components/IT/It.jsx";

const App = () => {
  return (
    <div>
      {/* <Home/> */}

      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/Academia" element={<Academics />}></Route>
        <Route path="/pro" element={<Pro />}></Route>
        <Route path="/industries" element={<Industries />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        {/* Routing of the Indurstries */}
        <Route path="/industries/it" element={<It />}></Route>
        <Route path="/industries/healthcare" element={<It />}></Route>
        <Route path="/industries/banking" element={<It />}></Route>
        <Route path="/industries/finance" element={<It />}></Route>
        <Route path="/industries/education" element={<It />}></Route>
        <Route path="/industries/retail" element={<It />}></Route>
        <Route path="/industries/manufacturing" element={<It />}></Route>
        <Route path="/industries/ecommerce" element={<It />}></Route>
        <Route path="/industries/logistics" element={<It />}></Route>
        {/* Services Routes */}
        <Route path="/digital-transformation" element={<Services />} />
        <Route path="/software-development" element={<Services />} />
        <Route path="/app-development" element={<Services />} />
        <Route path="/cyber-security" element={<Services />} />
        <Route path="/networking" element={<Services />} />
        <Route path="/data-management" element={<Services />} />
      </Routes>
      {/* <BrowserRouter> */}
      <Footer />
      {/* </BrowserRouter> */}
    </div>
  );
};

export default App;
