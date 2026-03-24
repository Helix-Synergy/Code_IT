import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

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
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);
    }

    window.googleTranslateElementInit = () => {
      const translateElement = document.getElementById(
        "google_translate_element",
      );
      if (translateElement) translateElement.innerHTML = "";
      new window.google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element",
      );
    };
  }, []);

  return (
    <>
      {/* HEADER */}
      <header className="w-full bg-[#0A0D1F] shadow-sm fixed top-0 z-50 h-24">
     <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-4 lg:px-6">


          {/* LOGO */}
       <div className="flex items-center h-full shrink-0">

            <img
              src="/Images/HomeImage.png"
              alt="Logo"
              className="h-26 w-[130px] object-contain "
            />
          </div>

          {/* DESKTOP NAV */}
      <nav className="hidden lg:flex flex-1 justify-center items-center gap-8 text-white font-medium">

            <Link
              to="/"
              className="hover:text-blue-600 no-underline text-white"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-blue-600 no-underline text-white "
            >
              About Us
            </Link>

            {/* CONSULTING */}
            <div className="relative group">
              <span className="cursor-pointer hover:text-blue-600 text-white">
                Consulting
              </span>
              <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md w-56 py-2 border border-gray-100">
                <Link
                  className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors no-underline"
                  to="/digital-transformation"
                >
                  Digital Transformation
                </Link>
                <Link
                  className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors no-underline"
                  to="/software-development"
                >
                  Software Development
                </Link>
                <Link
                  className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors no-underline"
                  to="/app-development"
                >
                  App Development
                </Link>
                <Link
                  className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors no-underline"
                  to="/cyber-security"
                >
                  Cyber Security
                </Link>
                <Link
                  className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors no-underline"
                  to="/networking"
                >
                  Networking
                </Link>
                <Link
                  className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors no-underline"
                  to="/data-management"
                >
                  Data Management
                </Link>
              </div>
            </div>

            {/* ACADEMIA */}
            <div className="relative group">
              <Link
                to="/Academia"
                className="hover:text-blue-600 no-underline text-white"
              >
                Academia
              </Link>
              <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md w-56 py-2 border border-gray-100">
                <Link
                  className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors no-underline"
                  to="/tech-internships"
                >
                  Tech Internships
                </Link>
                <Link
                  className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors no-underline"
                  to="/tech-projects"
                >
                  Tech Projects
                </Link>
                <Link
                  className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors no-underline"
                  to="/contract-research"
                >
                  Contract Research
                </Link>
                <Link
                  className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors no-underline"
                  to="/tech-publications"
                >
                  Tech Publications
                </Link>
                <Link
                  className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors no-underline"
                  to="/patent-filing"
                >
                  Patent Filing
                </Link>
                <Link
                  className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors no-underline"
                  to="/tech-meets-talks"
                >
                  Tech Meets & Talks
                </Link>
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
              <span className="cursor-pointer hover:text-blue-600 no-underline text-center leading-tight">
                Industries
                <span className="block text-xs opacity-80">We serve</span>
              </span>

              <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md w-64 py-2 border border-gray-100">
                <Link
                  className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors no-underline"
                  to="/industries/it"
                >
                  Information Technology
                </Link>
                <Link
                  className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors no-underline"
                  to="/industries/healthcare"
                >
                  Health Care
                </Link>
                <Link
                  className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors no-underline"
                  to="/industries/banking"
                >
                  Banking
                </Link>
                <Link
                  className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors no-underline"
                  to="/industries/finance"
                >
                  Finance
                </Link>
                <Link
                  className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors no-underline"
                  to="/industries/education"
                >
                  Education
                </Link>
                <Link
                  className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors no-underline"
                  to="/industries/retail"
                >
                  Retail
                </Link>
                <Link
                  className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors no-underline"
                  to="/industries/manufacturing"
                >
                  Manufacturing
                </Link>
                <Link
                  className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors no-underline"
                  to="/industries/ecommerce"
                >
                  E-Commerce
                </Link>
                <Link
                  className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors no-underline"
                  to="/industries/logistics"
                >
                  Logistics
                </Link>
              </div>
            </div>

            <Link
              to="/contact"
              className="hover:text-blue-600 no-underline text-white"
            >
              Contact
            </Link>
          </nav>

          {/* RIGHT SECTION - PHONE NUMBER AND TRANSLATOR */}
          <div className="hidden lg:flex items-center gap-6 shrink-0">
            <a href="tel:+917075782-798">
              <button className="bg-blue-500 text-white font-semibold text-base px-4 py-2 rounded-full hover:bg-blue-600">
                +91 7075-782-798
              </button>
            </a>
            <div
              id="google_translate_element"
              className="text-sm relative top-2"
            />
          </div>

          {/* MOBILE ICON */}
       <div
  className="lg:hidden text-2xl cursor-pointer text-white ml-auto"
  onClick={() => setMenuOpen(!menuOpen)}
>
  <IoMdMenu />
</div>

        </div>
      </header>

      {/* MOBILE MENU */}


<div
  className={`lg:hidden fixed top-16 right-0 h-[calc(100vh-4rem)] bg-gray-200 shadow-xl 
  transition-transform duration-300 ease-in-out transform z-40
  ${menuOpen ? "translate-x-0" : "translate-x-full"}
  w-72 overflow-y-auto`}
>
        <div className="flex flex-col p-4 gap-3">
                {/* CLOSE BUTTON */}
<div className="flex justify-end mb-2">
  <button
    onClick={() => setMenuOpen(false)}
    className="p-2 rounded-full hover:bg-gray-300 transition-colors"
    aria-label="Close menu"
  >
    <IoMdClose size={26} className="text-gray-800" />
  </button>
</div>
          <Link
            to="/"
            className="py-2 px-3 hover:bg-gray-50 rounded no-underline text-black"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="py-2 px-3 hover:bg-gray-50 rounded no-underline text-black"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>

          {/* SERVICES - MOBILE */}
          <div
            onClick={() => toggleSubmenu("services")}
            className="flex justify-between items-center py-2 px-3 hover:bg-gray-50 rounded cursor-pointer no-underline text-black"
          >
            <span>Consulting</span>
            <span
              className={`transform transition-transform ${activeSubmenu === "services" ? "rotate-90" : ""}`}
            >
              ▶
            </span>
          </div>
          {activeSubmenu === "services" && (
            <div className="ml-4 flex flex-col gap-1 border-l-2 border-gray-100 pl-3">
              <Link
                to="/digital-transformation"
                className="py-2 px-3 text-sm hover:bg-gray-50 rounded no-underline text-black"
                onClick={() => setMenuOpen(false)}
              >
                Digital Transformation
              </Link>
              <Link
                to="/software-development"
                className="py-2 px-3 text-sm hover:bg-gray-50 rounded no-underline text-black"
                onClick={() => setMenuOpen(false)}
              >
                Software Development
              </Link>
              <Link
                to="/app-development"
                className="py-2 px-3 text-sm hover:bg-gray-50 rounded no-underline text-black"
                onClick={() => setMenuOpen(false)}
              >
                App Development
              </Link>
              <Link
                to="/cyber-security"
                className="py-2 px-3 text-sm hover:bg-gray-50 rounded no-underline text-black"
                onClick={() => setMenuOpen(false)}
              >
                Cyber Security
              </Link>
              <Link
                to="/networking"
                className="py-2 px-3 text-sm hover:bg-gray-50 rounded no-underline text-black"
                onClick={() => setMenuOpen(false)}
              >
                Networking
              </Link>
              <Link
                to="/data-management"
                className="py-2 px-3 text-sm hover:bg-gray-50 rounded no-underline text-black"
                onClick={() => setMenuOpen(false)}
              >
                Data Management
              </Link>
            </div>
          )}

          <Link
            to="/Academia"
            className="py-2 px-3 hover:bg-gray-50 rounded no-underline text-black"
            onClick={() => setMenuOpen(false)}
          >
            Academia
          </Link>
          <Link
            to="/products"
            className="py-2 px-3 hover:bg-gray-50 rounded no-underline text-black"
            onClick={() => setMenuOpen(false)}
          >
            Prod-Kit
          </Link>

          {/* INDUSTRIES - MOBILE */}
          <div
            onClick={() => toggleSubmenu("industries")}
            className="flex justify-between items-center py-2 px-3 hover:bg-gray-50 rounded cursor-pointer"
          >
            <span>Industries We serve</span>
            <span
              className={`transform transition-transform ${activeSubmenu === "industries" ? "rotate-90" : ""}`}
            >
              ▶
            </span>
          </div>
          {activeSubmenu === "industries" && (
            <div className="ml-4 flex flex-col gap-1 border-l-2 border-gray-100 pl-3">
              <Link
                to="/industries/it"
                className="py-2 px-3 text-sm hover:bg-gray-50 rounded no-underline text-black"
                onClick={() => setMenuOpen(false)}
              >
                Information Technology
              </Link>
              <Link
                to="/industries/healthcare"
                className="py-2 px-3 text-sm hover:bg-gray-50 rounded no-underline text-black"
                onClick={() => setMenuOpen(false)}
              >
                Health Care
              </Link>
              <Link
                to="/industries/banking"
                className="py-2 px-3 text-sm hover:bg-gray-50 rounded no-underline text-black"
                onClick={() => setMenuOpen(false)}
              >
                Banking
              </Link>
              <Link
                to="/industries/finance"
                className="py-2 px-3 text-sm hover:bg-gray-50 rounded no-underline text-black"
                onClick={() => setMenuOpen(false)}
              >
                Finance
              </Link>
              <Link
                to="/industries/education"
                className="py-2 px-3 text-sm hover:bg-gray-50 rounded no-underline text-black"
                onClick={() => setMenuOpen(false)}
              >
                Education
              </Link>
              <Link
                to="/industries/retail"
                className="py-2 px-3 text-sm hover:bg-gray-50 rounded no-underline text-black"
                onClick={() => setMenuOpen(false)}
              >
                Retail
              </Link>
              <Link
                to="/industries/manufacturing"
                className="py-2 px-3 text-sm hover:bg-gray-50 rounded no-underline text-black"
                onClick={() => setMenuOpen(false)}
              >
                Manufacturing
              </Link>
              <Link
                to="/industries/ecommerce"
                className="py-2 px-3 text-sm hover:bg-gray-50 rounded no-underline text-black"
                onClick={() => setMenuOpen(false)}
              >
                E-Commerce
              </Link>
              <Link
                to="/industries/logistics"
                className="py-2 px-3 text-sm hover:bg-gray-50 rounded no-underline text-black"
                onClick={() => setMenuOpen(false)}
              >
                Logistics
              </Link>
            </div>
          )}

          <Link
            to="/contact"
            className="py-2 px-3 hover:bg-gray-50 rounded no-underline text-black"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>

          {/* PHONE NUMBER IN MOBILE MENU */}
          <div className="pt-4 mt-2 border-t border-gray-100">
            <div className="py-2 px-3">
              <a
                href="tel:+918985998978"
                className="inline-block py-2 px-4 border border-blue-600 text-blue-600 font-semibold rounded hover:bg-blue-50 transition-colors active:bg-blue-100 no-underline text-black"
              >
              +91 7075-782-798
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
