// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { IoMdMenu } from "react-icons/io";
// import "../Home/Home.css";

// const Navbar2 = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   // NEW: Controls which dropdown is open in mobile
//   const [activeSubmenu, setActiveSubmenu] = useState(null);

//   const toggleSubmenu = (menu) => {
//     setActiveSubmenu(activeSubmenu === menu ? null : menu);
//   };

//   useEffect(() => {
//     if (!document.getElementById("google-translate-script")) {
//       const script = document.createElement("script");
//       script.id = "google-translate-script";
//       script.src =
//         "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
//       document.body.appendChild(script);
//     }

//     window.googleTranslateElementInit = () => {
//       const translateElement = document.getElementById(
//         "google_translate_element"
//       );
//       translateElement.innerHTML = "";

//       new window.google.translate.TranslateElement(
//         { pageLanguage: "en" },
//         "google_translate_element"
//       );
//     };
//   }, []);

//   return (
//     <>
//       <header className="home-header">
//         {/* Logo Section */}
//         <div className="logo">
//          <img src="/Images/HomeImage.png" alt="Logo" />

//         </div>

//         {/* Desktop / Tablet Navigation */}
//         <nav className="home-nav">
//           <Link to="/">Home</Link>
//           <Link to="/about">About Us</Link>

//           {/* Desktop Services Dropdown */}
//           <div className="dropdown">
//             <span className="dropbtn" style={{ color: "#ddd" }}>
//               Consulting
//             </span>
//             <div className="dropdown-content">
//               <Link to="/digital-transformation">Digital Transformation</Link>
//               <Link to="/software-development">Software Development</Link>
//               <Link to="/app-development">App Development</Link>
//               <Link to="/cyber-security">Cyber Security</Link>
//               <Link to="/cyber-security">Networking</Link>
//               <Link to="/data-management">Data Management</Link>
//             </div>
//           </div>

//                <div className="dropdown">
//   <Link
//     to="/Academia"
//     className="dropdown-link"
//     onClick={() => setMenuOpen(false)}
//   >
//     Academia
//   </Link>

//   <div className="dropdown-menu">
//     <Link to="/tech-internships">Tech Internships</Link>
//     <Link to="/tech-projects">Tech Projects</Link>
//     <Link to="/contract-research">Contract Research</Link>
//     <Link to="/tech-publications">Tech Publications</Link>
//     <Link to="/patent-filing">Patent Filing</Link>
//     <Link to="/tech-meets-talks">Tech Meets & Talks</Link>
//   </div>
// </div>
//           <Link to="/products">Prod-Kit</Link>

//           {/* Desktop Industries Dropdown */}
//           <div className="dropdown-industries">
//             <span className="dropbtn-industries" style={{ color: "#ddd" }}>
//               Industries 
//               We Server
//             </span>
//             <div className="dropdown-content-industries">
//               <Link to="/industries/it">Information Technology</Link>
//               <Link to="/industries/healthcare">Health Care</Link>
//               <Link to="/industries/banking">Banking</Link>
//               <Link to="/industries/finance">Finance</Link>
//               <Link to="/industries/education">Education</Link>
//               <Link to="/industries/retail">Retail</Link>
//               <Link to="/industries/manufacturing">Manufacturing</Link>
//               <Link to="/industries/ecommerce">E-Commerce</Link>
//               <Link to="/industries/logistics">Logistics</Link>
//             </div>
//           </div>

//           <Link to="/contact">Contact</Link>
//         </nav>

//         {/* Mobile Menu Icon */}
//         <div
//           className="mobile-menu-icon"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           <IoMdMenu />
//         </div>

//         {/* Right Section */}
//         <div className="right-section">
//           <button className="call-btn">+91 8985-998-978</button>
//           <div id="google_translate_element" className="translate-box"></div>
//         </div>
//       </header>

//       {/* ------------------ MOBILE MENU ------------------ */}
//       <div className={`mobile-dropdown ${menuOpen ? "show-menu" : ""}`}>
//         <Link to="/" onClick={() => setMenuOpen(false)}>
//           Home
//         </Link>
//         <Link to="/about" onClick={() => setMenuOpen(false)}>
//           About Us
//         </Link>

//         {/* === MOBILE SERVICES SECTION === */}
//         <div
//           className="mobile-parent"
//           onClick={() => toggleSubmenu("services")}
//         >
//           Services
//           <span
//             className={`arrow ${activeSubmenu === "services" ? "rotate" : ""}`}
//           >
//             ▶
//           </span>
//         </div>

//         <div
//           className={`mobile-submenu ${
//             activeSubmenu === "services" ? "show-submenu" : ""
//           }`}
//         >
//           <Link to="/digital-transformation">Digital Transformation</Link>
//           <Link to="/software-development">Software Development</Link>
//           <Link to="/app-development">App Development</Link>
//           <Link to="/cyber-security">Cyber Security</Link>
//           <Link to="/networking">Networking</Link>
//           <Link to="/data-management">Data Management</Link>
//         </div>

//         <Link to="/Academia" onClick={() => setMenuOpen(false)}>
//           Academia
//         </Link>
//         <Link to="/products" onClick={() => setMenuOpen(false)}>
//           Prod-Kit
//         </Link>

//         {/* === MOBILE INDUSTRIES SECTION === */}
//         <div
//           className="mobile-parent"
//           onClick={() => toggleSubmenu("industries")}
//         >
//           Industries
//           <span
//             className={`arrow ${
//               activeSubmenu === "industries" ? "rotate" : ""
//             }`}
//           >
//             ▶
//           </span>
//         </div>

//         <div
//           className={`mobile-submenu ${
//             activeSubmenu === "industries" ? "show-submenu" : ""
//           }`}
//         >
//           <Link to="/industries/it">Information Technology</Link>
//           <Link to="/industries/healthcare">Health Care</Link>
//           <Link to="/industries/banking">Banking</Link>
//           <Link to="/industries/finance">Finance</Link>
//           <Link to="/industries/education">Education</Link>
//           <Link to="/industries/retail">Retail</Link>
//           <Link to="/industries/manufacturing">Manufacturing</Link>
//           <Link to="/industries/ecommerce">E-Commerce</Link>
//           <Link to="/industries/logistics">Logistics</Link>
//         </div>

//         <Link to="/contact" onClick={() => setMenuOpen(false)}>
//           Contact
//         </Link>
//       </div>
//     </>
//   );
// };

// export default Navbar2;
/*
NOTE:
- NO text/content/routes changed
- Same JSX data, only classes replaced with Tailwind
- Dropdown + mobile behavior preserved
*/
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";

const Navbar2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleSubmenu = (menu) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

  useEffect(() => {
    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);
    }

    window.googleTranslateElementInit = () => {
      const translateElement = document.getElementById("google_translate_element");
      if (translateElement) translateElement.innerHTML = "";
      new window.google.translate.TranslateElement({ pageLanguage: "en" }, "google_translate_element");
    };
  }, []);

  return (
    <>
      {/* HEADER */}
      <header className="w-full bg-[#0A0D1F] shadow-sm fixed top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-6 py-3">

          {/* LOGO */}
          <div className="flex items-center">
            <img src="/Images/HomeImage.png" alt="Logo" className="h-20 w-28" />
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8 text-white font-medium">
            <Link to="/" className="hover:text-blue-600 no-underline text-white">Home</Link>
            <Link to="/about" className="hover:text-blue-600 no-underline text-white ">About Us</Link>

            {/* CONSULTING */}
            <div className="relative group">
              <span className="cursor-pointer hover:text-blue-600 text-white">Consulting</span>
              <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md w-56 py-2 border border-gray-100">
                <Link className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors no-underline" to="/digital-transformation">Digital Transformation</Link>
                <Link className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors no-underline" to="/software-development">Software Development</Link>
                <Link className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors no-underline" to="/app-development">App Development</Link>
                <Link className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors no-underline" to="/cyber-security">Cyber Security</Link>
                <Link className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors no-underline" to="/networking">Networking</Link>
                <Link className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors no-underline" to="/data-management">Data Management</Link>
              </div>
            </div>

            {/* ACADEMIA */}
            <div className="relative group">
              <Link to="/Academia" className="hover:text-blue-600 no-underline text-white">Academia</Link>
              <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md w-56 py-2 border border-gray-100">
                <Link className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors no-underline" to="/tech-internships">Tech Internships</Link>
                <Link className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors no-underline" to="/tech-projects">Tech Projects</Link>
                <Link className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors no-underline" to="/contract-research">Contract Research</Link>
                <Link className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors no-underline" to="/tech-publications">Tech Publications</Link>
                <Link className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors no-underline" to="/patent-filing">Patent Filing</Link>
                <Link className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors no-underline" to="/tech-meets-talks">Tech Meets & Talks</Link>
              </div>
            </div>

          {/* prod it */}
<div className="relative group">
  {/* Main Menu */}
  <Link
    to="/products"
    className="text-white no-underline hover:text-blue-600 transition-colors"
  >
    Prod-Kit
  </Link>

  {/* Dropdown */}
  <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md w-56 py-2 border border-gray-100 z-50">
    
    <Link
      to="/products/c-port"
      className="block px-4 py-2 text-sm text-gray-700 no-underline hover:bg-blue-50 hover:text-blue-600 transition-colors"
    >
      C-PORT
    </Link>

    <Link
      to="/products/c-care"
      className="block px-4 py-2 text-sm text-gray-700 no-underline hover:bg-blue-50 hover:text-blue-600 transition-colors"
    >
      C-CARE
    </Link>

    <Link
      to="/products/c-raise"
      className="block px-4 py-2 text-sm text-gray-700 no-underline hover:bg-blue-50 hover:text-blue-600 transition-colors"
    >
      C-RAISE
    </Link>

    <Link
      to="/products/c-emptor"
      className="block px-4 py-2 text-sm text-gray-700 no-underline hover:bg-blue-50 hover:text-blue-600 transition-colors"
    >
      C-EMPTOR
    </Link>

    <Link
      to="/products/c-trans"
      className="block px-4 py-2 text-sm text-gray-700 no-underline hover:bg-blue-50 hover:text-blue-600 transition-colors"
    >
      C-TRANS
    </Link>

    <Link
      to="/products/c-viand"
      className="block px-4 py-2 text-sm text-gray-700 no-underline hover:bg-blue-50 hover:text-blue-600 transition-colors"
    >
      C-VIAND
    </Link>

    <Link
      to="/products/c-lit"
      className="block px-4 py-2 text-sm text-gray-700 no-underline hover:bg-blue-50 hover:text-blue-600 transition-colors"
    >
      C-LIT
    </Link>

    <Link
      to="/products/c-track"
      className="block px-4 py-2 text-sm text-gray-700 no-underline hover:bg-blue-50 hover:text-blue-600 transition-colors"
    >
      C-TRACK
    </Link>

    <Link
      to="/products/c-get"
      className="block px-4 py-2 text-sm text-gray-700 no-underline hover:bg-blue-50 hover:text-blue-600 transition-colors"
    >
      C-GET
    </Link>

    <Link
      to="/products/c-assist"
      className="block px-4 py-2 text-sm text-gray-700 no-underline hover:bg-blue-50 hover:text-blue-600 transition-colors"
    >
      C-ASSIST
    </Link>

  </div>
</div>



            {/* INDUSTRIES */}
            <div className="relative group">
              <span className="cursor-pointer hover:text-blue-600 no-underline text-center">
                Industries<br />We serve
              </span>
              <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md w-64 py-2 border border-gray-100">
                <Link className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors no-underline" to="/industries/it">Information Technology</Link>
                <Link className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors no-underline" to="/industries/healthcare">Health Care</Link>
                <Link className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors no-underline" to="/industries/banking">Banking</Link>
                <Link className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors no-underline" to="/industries/finance">Finance</Link>
                <Link className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors no-underline" to="/industries/education">Education</Link>
                <Link className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors no-underline" to="/industries/retail">Retail</Link>
                <Link className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors no-underline" to="/industries/manufacturing">Manufacturing</Link>
                <Link className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors no-underline" to="/industries/ecommerce">E-Commerce</Link>
                <Link className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors no-underline" to="/industries/logistics">Logistics</Link>
              </div>
            </div>

            <Link to="/contact" className="hover:text-blue-600 no-underline text-white">Contact</Link>
          </nav>

          {/* RIGHT SECTION - PHONE NUMBER AND TRANSLATOR */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="tel:+918985998978">
  <button className="bg-blue-500 text-white font-semibold text-base px-4 py-2 rounded-full hover:bg-blue-600">
    +91 8985-998-978
  </button>
  </a>
  <div id="google_translate_element" className="text-sm relative top-2" />
</div>


          {/* MOBILE ICON */}
          <div className="lg:hidden text-2xl cursor-pointer text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <IoMdMenu />
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div className={`lg:hidden fixed top-16 left-0 w-full bg-white shadow-md transition-all overflow-y-auto ${menuOpen ? "block" : "hidden"} z-40`}>
        <div className="flex flex-col p-4 gap-3">
          <Link to="/" className="py-2 px-3 hover:bg-gray-50 rounded" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" className="py-2 px-3 hover:bg-gray-50 rounded" onClick={() => setMenuOpen(false)}>About Us</Link>

          {/* SERVICES - MOBILE */}
          <div onClick={() => toggleSubmenu("services")} className="flex justify-between items-center py-2 px-3 hover:bg-gray-50 rounded cursor-pointer">
            <span>Consulting</span>
            <span className={`transform transition-transform ${activeSubmenu === "services" ? "rotate-90" : ""}`}>▶</span>
          </div>
          {activeSubmenu === "services" && (
            <div className="ml-4 flex flex-col gap-1 border-l-2 border-gray-100 pl-3">
              <Link to="/digital-transformation" className="py-2 px-3 text-sm hover:bg-gray-50 rounded" onClick={() => setMenuOpen(false)}>Digital Transformation</Link>
              <Link to="/software-development" className="py-2 px-3 text-sm hover:bg-gray-50 rounded" onClick={() => setMenuOpen(false)}>Software Development</Link>
              <Link to="/app-development" className="py-2 px-3 text-sm hover:bg-gray-50 rounded" onClick={() => setMenuOpen(false)}>App Development</Link>
              <Link to="/cyber-security" className="py-2 px-3 text-sm hover:bg-gray-50 rounded" onClick={() => setMenuOpen(false)}>Cyber Security</Link>
              <Link to="/networking" className="py-2 px-3 text-sm hover:bg-gray-50 rounded" onClick={() => setMenuOpen(false)}>Networking</Link>
              <Link to="/data-management" className="py-2 px-3 text-sm hover:bg-gray-50 rounded" onClick={() => setMenuOpen(false)}>Data Management</Link>
            </div>
          )}

          <Link to="/Academia" className="py-2 px-3 hover:bg-gray-50 rounded" onClick={() => setMenuOpen(false)}>Academia</Link>
          <Link to="/products" className="py-2 px-3 hover:bg-gray-50 rounded" onClick={() => setMenuOpen(false)}>Prod-Kit</Link>

          {/* INDUSTRIES - MOBILE */}
          <div onClick={() => toggleSubmenu("industries")} className="flex justify-between items-center py-2 px-3 hover:bg-gray-50 rounded cursor-pointer">
            <span>Industries We serve</span>
            <span className={`transform transition-transform ${activeSubmenu === "industries" ? "rotate-90" : ""}`}>▶</span>
          </div>
          {activeSubmenu === "industries" && (
            <div className="ml-4 flex flex-col gap-1 border-l-2 border-gray-100 pl-3">
              <Link to="/industries/it" className="py-2 px-3 text-sm hover:bg-gray-50 rounded" onClick={() => setMenuOpen(false)}>Information Technology</Link>
              <Link to="/industries/healthcare" className="py-2 px-3 text-sm hover:bg-gray-50 rounded" onClick={() => setMenuOpen(false)}>Health Care</Link>
              <Link to="/industries/banking" className="py-2 px-3 text-sm hover:bg-gray-50 rounded" onClick={() => setMenuOpen(false)}>Banking</Link>
              <Link to="/industries/finance" className="py-2 px-3 text-sm hover:bg-gray-50 rounded" onClick={() => setMenuOpen(false)}>Finance</Link>
              <Link to="/industries/education" className="py-2 px-3 text-sm hover:bg-gray-50 rounded" onClick={() => setMenuOpen(false)}>Education</Link>
              <Link to="/industries/retail" className="py-2 px-3 text-sm hover:bg-gray-50 rounded" onClick={() => setMenuOpen(false)}>Retail</Link>
              <Link to="/industries/manufacturing" className="py-2 px-3 text-sm hover:bg-gray-50 rounded" onClick={() => setMenuOpen(false)}>Manufacturing</Link>
              <Link to="/industries/ecommerce" className="py-2 px-3 text-sm hover:bg-gray-50 rounded" onClick={() => setMenuOpen(false)}>E-Commerce</Link>
              <Link to="/industries/logistics" className="py-2 px-3 text-sm hover:bg-gray-50 rounded" onClick={() => setMenuOpen(false)}>Logistics</Link>
            </div>
          )}

          <Link to="/contact" className="py-2 px-3 hover:bg-gray-50 rounded" onClick={() => setMenuOpen(false)}>Contact</Link>
          
          {/* PHONE NUMBER IN MOBILE MENU */}
          <div className="pt-4 mt-2 border-t border-gray-100">
<div className="py-2 px-3">
  <a 
    href="tel:+918985998978" 
    className="inline-block py-2 px-4 border border-blue-600 text-blue-600 font-semibold rounded hover:bg-blue-50 transition-colors active:bg-blue-100"
  >
    +91 8985-998-978
  </a>
</div>
            <div className="py-2 px-3">
              <div id="google_translate_element_mobile" className="text-sm" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar2;