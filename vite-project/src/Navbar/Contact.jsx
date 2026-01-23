import React from "react";
import "./Contact.css";
import PaymentDetails from "../Components/PaymentDetails/PaymentDetails.jsx";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/contact/contactform", // URL
        formData, // Data to send (no JSON.stringify needed)
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      const data = response.data; // Axios automatically parses JSON

      // Optional: show success toast
      if (data.message) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error(error);

      // Optional: show error toast
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Server error, please try again");
      }
    }
  };

  return (
    <div className="contact-container">
      <ToastContainer />

      {/* Hero Banner - Modified to remove background */}
      <div className="contact-hero-banner">
        <h1>Contact Us</h1>
      </div>

      {/* Contact Section */}
      <section className="contact-two-area">
        <div className="container-lg">
          <div className="row align-items-center">
            <div className="col-xl-7 order-2 order-xl-2">
              <div className="contact-two-left">
                <div className="contact-two__content">
                  <div className="section-header mb-20">
                    <h2>Contact Us or Visit Us</h2>
                  </div>

                  <ul className="contact-list">
                    <p className="fw-bold">Canada Office</p>
                    <li>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.50079 0C4.50533 0 2.06836 2.43697 2.06836 5.4324C2.06836 9.14982 6.92985 14.6072 7.13684 14.8377C7.33125 15.0543 7.67068 15.0539 7.86475 14.8377C8.07173 14.6072 12.9332 9.14982 12.9332 5.4324C12.9332 2.43697 10.4962 0 7.50079 0ZM7.50079 8.1656C5.9937 8.1656 4.76763 6.93949 4.76763 5.4324C4.76763 3.92531 5.99373 2.69924 7.50079 2.69924C9.00785 2.69924 10.2339 3.92534 10.2339 5.43243C10.2339 6.93952 9.00785 8.1656 7.50079 8.1656Z"
                          fill="#121C27"
                        ></path>
                      </svg>
                      <a href="#0">Vancouver | Canada</a>
                    </li>
                  </ul>

                  <ul className="contact-list">
                    <p className="fw-bold">India Office</p>
                    <li>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.50079 0C4.50533 0 2.06836 2.43697 2.06836 5.4324C2.06836 9.14982 6.92985 14.6072 7.13684 14.8377C7.33125 15.0543 7.67068 15.0539 7.86475 14.8377C8.07173 14.6072 12.9332 9.14982 12.9332 5.4324C12.9332 2.43697 10.4962 0 7.50079 0ZM7.50079 8.1656C5.9937 8.1656 4.76763 6.93949 4.76763 5.4324C4.76763 3.92531 5.99373 2.69924 7.50079 2.69924C9.00785 2.69924 10.2339 3.92534 10.2339 5.43243C10.2339 6.93952 9.00785 8.1656 7.50079 8.1656Z"
                          fill="#121C27"
                        ></path>
                      </svg>
                      <a href="#0">
                        Raheja Mindspace IT Park, HITEC City, Madhapur,
                        Hyderabad, Telangana, 500081
                      </a>
                    </li>
                    <li>
                      <div className="flex items-start gap-3">
                        {/* Mail Icon */}
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.71865 8.12305L8.46237 9.38357C7.95293 9.8948 7.05656 9.90582 6.5361 9.38357L5.27977 8.12305L0.767578 12.6499C0.935537 12.7275 1.12072 12.7739 1.3176 12.7739H13.6809C13.8778 12.7739 14.0629 12.7276 14.2308 12.6499L9.71865 8.12305Z"
                            fill="#121C27"
                          />
                          <path
                            d="M13.6808 2.22656H1.31754C1.12066 2.22656 0.935479 2.27291 0.767578 2.35058L5.58917 7.18816L7.15834 8.76258C7.32486 8.9291 7.67355 8.9291 7.84008 8.76258L9.40752 7.18989L14.2307 2.35055C14.0628 2.27285 13.8777 2.22656 13.6808 2.22656Z"
                            fill="#121C27"
                          />
                          <path
                            d="M0.140215 2.96484C0.0533203 3.14057 0 3.33563 0 3.54457V11.4547C0 11.6637 0.0532617 11.8587 0.140186 12.0345L4.6602 7.49979L0.140215 2.96484Z"
                            fill="#121C27"
                          />
                          <path
                            d="M14.8598 2.96484L10.3398 7.49985L14.8598 12.0346C14.9467 11.8588 15 11.6638 15 11.4548V3.54463C15 3.33563 14.9467 3.14057 14.8598 2.96484Z"
                            fill="#121C27"
                          />
                        </svg>

                        {/* Email & Phone */}
                        <a
                          href="mailto:hello@codeitconsulting.co.in"
                          className="no-underline"
                        >
                          <p className="text-sm leading-6 text-[#121C27]">
                            hello@codeitconsulting.co.in
                            <br />
                            <i className="fa-solid fa-phone mr-1"></i>
                            7075782798
                          </p>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="contact-two__form">
                  <form
                    id="contact_form"
                    name="contact_form"
                    onSubmit={handleSubmit}
                  >
                    <div className="row g-4 mb-4">
                      <div className="col-6">
                        <div className="input">
                          <input
                            name="name"
                            id="form_name"
                            type="text"
                            placeholder="Enter Name"
                            value={formData.name}
                            onChange={handleChange}
                          />

                          <label for="form_name" class="visually-hidden">
                            Name
                          </label>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="input">
                          <input
                            name="email"
                            id="form_email"
                            type="email"
                            placeholder="E-mail address"
                            value={formData.email}
                            onChange={handleChange}
                          />

                          <label for="form_email" class="visually-hidden">
                            Email Address
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="textarea">
                      <textarea
                        name="message"
                        id="form_message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="btn-one mt-50"
                      id="submitBtn"
                    >
                      Send message
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-xl-5 order-1 order-xl-1">
              <div className="contact-two__map">
                <img src="/Images/Contact1.jpg" alt="Contact Image" />
              </div>
            </div>
          </div>
          <div>
            <PaymentDetails />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
