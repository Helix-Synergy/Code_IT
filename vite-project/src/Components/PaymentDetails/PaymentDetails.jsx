import React, { useState } from "react";
import "./PaymentDetails.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const dropdownOptions = {
  Consulting: [
    "Digital Transformation",
    "Software Development",
    "App Development",
    "Cyber Security",
    "Networking",
    "Data Management",
  ],
  Academia: [
    "Tech Internship",
    "Tech Projects",
    "Contract Research",
    "Tech Publications",
    "Patent Filing",
    "Tech Meets and Talks",
  ],
  "Prod-Kit": [
    "C-Port",
    "C-Care",
    "C-Raise",
    "C-Emptor",
    "C-Trans",
    "C-Vivand",
    "C-LIT",
    "C-Track",
    "C-Get",
    "C-Assist",
  ],
};

const PaymentDetails = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [amount, setAmount] = useState("");

  const handlePayment = async () => {
    if (!name || !email || !message || !category || !subCategory || !amount) {
      toast.error("Please fill all fields");
      return;
    }

    if (!window.Razorpay) {
      toast.error("Razorpay SDK not loaded");
      return;
    }

    try {
      // 1️⃣ Create order on backend
 const response = await axios.post(
  `${API_BASE_URL}/serviceselection/save`,
  {
    name,
    email,
    message,
    category,
    subCategory,
    amount: Number(amount),
  },
  {
    headers: { "Content-Type": "application/json" },
  }
);


      const data = response.data;

      // 2️⃣ Razorpay options
      const options = {
        key: data.key,
        amount: data.order.amount,
        currency: "INR",
        name: "CodeIT Consulting",
        description: `${category} - ${subCategory}`,
        order_id: data.order.id,

        prefill: {
          name: name,
          email: email,
        },

        handler: async function (razorpayResponse) {
          // toast.info("Verifying payment...");

          try {
            // 3️⃣ Verify payment on backend
            const verifyResponse = await axios.post(
            `${API_BASE_URL}/serviceselection/verify-payment`,
              {
                orderId: razorpayResponse.razorpay_order_id,
                paymentId: razorpayResponse.razorpay_payment_id,
                signature: razorpayResponse.razorpay_signature,
              },
              { headers: { "Content-Type": "application/json" } },
              console.log(        `${API_BASE_URL}/serviceselection/verify-payment`)
            );

            toast.success(
              verifyResponse.data.message || "Payment verified successfully"
            );

            // Reset form
            setName("");
            setEmail("");
            setMessage("");
            setCategory("");
            setSubCategory("");
            setAmount("");
          } catch (verifyError) {
            console.error(verifyError);
            toast.error(
              verifyError.response?.data?.message ||
                "Payment verification failed"
            );
          }
        },

        theme: { color: "#0d6efd" },
      };

      const razorpay = new window.Razorpay(options);

      razorpay.on("payment.failed", function (response) {
        toast.error(response.error.description || "Payment failed");
      });

      toast.info("Opening payment gateway...");
      razorpay.open();
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Payment initiation failed");
    }
  };

  return (
    <div className="payment-box">
      <ToastContainer />
      <h3>Payment Details</h3>

      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="text"
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option>
        {Object.keys(dropdownOptions).map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {category && (
        <select
          value={subCategory}
          onChange={(e) => setSubCategory(e.target.value)}
        >
          <option value="">Select Service</option>
          {dropdownOptions[category].map((sub) => (
            <option key={sub} value={sub}>
              {sub}
            </option>
          ))}
        </select>
      )}

      <input
        type="number"
        placeholder="Enter Amount (INR)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default PaymentDetails;
