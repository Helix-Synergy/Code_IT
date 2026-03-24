// import React, { useState } from "react";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./PaymentDetails.css";

// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// const dropdownOptions = {
//   Consulting: [
//     "Digital Transformation",
//     "Software Development",
//     "App Development",
//     "Cyber Security",
//     "Networking",
//     "Data Management",
//   ],
//   Academia: [
//     "Tech Internship",
//     "Tech Projects",
//     "Contract Research",
//     "Tech Publications",
//     "Patent Filing",
//     "Tech Meets and Talks",
//   ],
//   "Prod-Kit": [
//     "C-Port",
//     "C-Care",
//     "C-Raise",
//     "C-Emptor",
//     "C-Trans",
//     "C-Vivand",
//     "C-LIT",
//     "C-Track",
//     "C-Get",
//     "C-Assist",
//   ],
// };

// const PaymentDetails = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//     category: "",
//     subCategory: "",
//     amount: "",
//   });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   // Optional: Poll payment status until webhook updates DB
//   const pollPaymentStatus = (orderId) => {
//     const interval = setInterval(async () => {
//       try {
//         const { data } = await axios.get(
//           `${API_BASE_URL}/serviceselection/payment-status/${orderId}`
//         );

//         if (data?.status === "paid") {
//           // toast.success(" Payment confirmed successfully via webhook!");
//           clearInterval(interval);
//           setLoading(false);
//           setForm({
//             name: "",
//             email: "",
//             message: "",
//             category: "",
//             subCategory: "",
//             amount: "",
//           });
//         }

//         if (data?.status === "failed") {
//         toast.error("Payment failed. Please try again.");

//           clearInterval(interval);
//           setLoading(false);
//         }
//       } catch (error) {
//         console.error("Polling error:", error);
//       }
//     }, 3000);
//   };

//   const handlePayment = async () => {
//     const { name, email, message, category, subCategory, amount } = form;

//     if (!name || !email || !message || !category || !subCategory || !amount) {
//      toast.error("Please complete all required fields to proceed.");

//       return;
//     }

//     if (!window.Razorpay) {
//       toast.error("Razorpay SDK not loaded");
//       return;
//     }

//     setLoading(true);
// // toast.info("Initializing payment. Please wait...");


//     try {
//       // 1️⃣ Create order
//       const { data } = await axios.post(
//         `${API_BASE_URL}/serviceselection/save`,
//         { ...form, amount: Number(amount) }
//       );

//       if (!data?.order?.id) {
//         toast.error("Order creation failed");
//         setLoading(false);
//         return;
//       }

//       toast.info("Redirecting to secure payment gateway...");


//       // 2️⃣ Open Razorpay checkout
//       const options = {
//         key: data.key,
//         amount: data.order.amount,
//         currency: "INR",
//         name: "Code IT Consulting",
//         description: `${category} - ${subCategory}`,
//         order_id: data.order.id,
//         prefill: { name, email },
//         theme: { color: "#484d54" },

//         // ✅ Updated handler: verify payment immediately
//         handler: async function (response) {
//           toast.info("Payment received. Verifying transaction...");


//           try {
//             const { data: verifyData } = await axios.post(
//               `${API_BASE_URL}/serviceselection/verify-payment`,
//               {
//                 orderId: response.razorpay_order_id,
//                 paymentId: response.razorpay_payment_id,
//                 signature: response.razorpay_signature,
//               }
//             );

//             if  (verifyData?.success) {
//                setLoading(false);
//          toast.success("Payment completed successfully Receipt will be emailed shortly.");

//               setLoading(false);
//               setForm({
//                 name: "",
//                 email: "",
//                 message: "",
//                 category: "",
//                 subCategory: "",
//                 amount: "",
//               });
//             } else {
//             toast.error(
//   "Payment verification failed. If the amount was deducted, it will be refunded automatically."
// );

//               setLoading(false);
//             }
//           } catch (err) {
//             console.error("Verification error:", err);
//             toast.error(err.response?.data?.message || "Verification failed");
//             setLoading(false);
//           }

//           // Optional: start webhook polling in background
//           pollPaymentStatus(data.order.id);
//         },

//         modal: {
//           ondismiss: () => {
//          toast.error(
//   "Payment was unsuccessful. Please try again or use a different payment method."
// );

//             setLoading(false);
//           },
//         },
//       };

//       const razorpay = new window.Razorpay(options);

//       razorpay.on("payment.failed", function (response) {
//         toast.error(response.error?.description || "Payment failed");
//         setLoading(false);
//       });
//   setLoading(false);
//       razorpay.open();
//     } catch (err) {
//       console.error(err);
//       toast.error(err.response?.data?.message || "Payment initiation failed");
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="payment-box">
//       <ToastContainer position="top-right" autoClose={3000} />
//       <h3>Payment Details</h3>

//       <input
//         name="name"
//         type="text"
//         placeholder="Your Name"
//         value={form.name}
//         onChange={handleChange}
//       />

//       <input
//         name="email"
//         type="email"
//         placeholder="Your Email"
//         value={form.email}
//         onChange={handleChange}
//       />

//       <input
//         name="message"
//         type="text"
//         placeholder="Your Message"
//         value={form.message}
//         onChange={handleChange}
//       />

//       <select name="category" value={form.category} onChange={handleChange}>
//         <option value="">Select Category</option>
//         {Object.keys(dropdownOptions).map((cat) => (
//           <option key={cat} value={cat}>
//             {cat}
//           </option>
//         ))}
//       </select>

//       {form.category && (
//         <select
//           name="subCategory"
//           value={form.subCategory}
//           onChange={handleChange}
//         >
//           <option value="">Select Service</option>
//           {dropdownOptions[form.category].map((sub) => (
//             <option key={sub} value={sub}>
//               {sub}
//             </option>
//           ))}
//         </select>
//       )}

//       <input
//         name="amount"
//         type="number"
//         placeholder="Enter Amount (INR)"
//         value={form.amount}
//         onChange={handleChange}
//       />

//       <button onClick={handlePayment} disabled={loading}>
//         {loading ? "Processing..." : "Pay Now"}
//       </button>
//     </div>
//   );
// };

// export default PaymentDetails;
// // ----------------------------------The code is from here-------------
// -------------------------------the code is from here-----------------
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./PaymentDetails.css";

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
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    category: "",
    subCategory: "",
    amount: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // Optional: Poll payment status until webhook updates DB
  const pollPaymentStatus = (orderId) => {
    const interval = setInterval(async () => {
      try {
        const { data } = await axios.get(
          `${API_BASE_URL}/serviceselection/payment-status/${orderId}`
        );

        if (data?.status === "paid") {
          // toast.success(" Payment confirmed successfully via webhook!");
          clearInterval(interval);
          setLoading(false);
          setForm({
            name: "",
            email: "",
            message: "",
            category: "",
            subCategory: "",
            amount: "",
          });
        }

        if (data?.status === "failed") {
        toast.error("Payment failed. Please try again.");

          clearInterval(interval);
          setLoading(false);
        }
      } catch (error) {
        console.error("Polling error:", error);
      }
    }, 3000);
  };

  const handlePayment = async () => {
    const { name, email, message, category, subCategory, amount } = form;

    if (!name || !email || !message || !category || !subCategory || !amount) {
     toast.error("Please complete all required fields to proceed.");

      return;
    }

    if (!window.Razorpay) {
      toast.error("Razorpay SDK not loaded");
      return;
    }

    setLoading(true);
// toast.info("Initializing payment. Please wait...");


    try {
      // 1️⃣ Create order
      const { data } = await axios.post(
        `${API_BASE_URL}/serviceselection/save`,
        { ...form, amount: Number(amount) }
      );

      if (!data?.order?.id) {
        toast.error("Order creation failed");
        setLoading(false);
        return;
      }

      toast.info("Redirecting to secure payment gateway...");


      // 2️⃣ Open Razorpay checkout
      const options = {
        key: data.key,
        amount: data.order.amount,
        currency: "INR",
        name: "Code IT Consulting",
        description: `${category} - ${subCategory}`,
        order_id: data.order.id,
        prefill: { name, email },
        theme: { color: "#484d54" },

        // ✅ Updated handler: verify payment immediately
        handler: async function (response) {
          toast.info("Payment received. Verifying transaction...");


          try {
            const { data: verifyData } = await axios.post(
              `${API_BASE_URL}/serviceselection/verify-payment`,
              {
                orderId: response.razorpay_order_id,
                paymentId: response.razorpay_payment_id,
                signature: response.razorpay_signature,
              }
            );

       if (verifyData?.success) {
  toast.success("Payment completed successfully. Receipt will be emailed shortly.");
} else if (
  verifyData?.message?.includes("already")
) {
  toast.success("Payment completed successfully. Receipt will be emailed shortly.");
} else {
  toast.error("Payment verification failed.");
}


              setLoading(false);
              setForm({
                name: "",
                email: "",
                message: "",
                category: "",
                subCategory: "",
                amount: "",
              });
            } catch (err) {
  console.error("Verification error:", err);
  toast.error(
    err.response?.data?.message ||
    "Payment verification failed. If the amount was deducted, it will be refunded automatically."
  );
} finally {
  setLoading(false);
}
          // Optional: start webhook polling in background
          pollPaymentStatus(data.order.id);
        },

     modal: {
  ondismiss: async () => {
    toast.error(
      "Payment cancelled. No amount was deducted."
    );

    try {
      await axios.post(
        `${API_BASE_URL}/serviceselection/serviceselection/payment-failed`,
        {
          orderId: data.order.id,
          reason: "User cancelled Razorpay popup",
        }
      );
    } catch (err) {
      console.error("Failed to update cancel status", err);
    }

    setLoading(false);
  },
},

        
      };

      const razorpay = new window.Razorpay(options);

      razorpay.on("payment.failed", function (response) {
        toast.error(response.error?.description || "Payment failed");
        setLoading(false);
      });
  setLoading(false);
      razorpay.open();
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Payment initiation failed");
      setLoading(false);
    }
  };

  return (
    <div className="payment-box">
      <ToastContainer position="top-right" autoClose={3000} />
      <h3>Payment Details</h3>

      <input
        name="name"
        type="text"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        name="email"
        type="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
      />

      <input
        name="message"
        type="text"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
      />

      <select name="category" value={form.category} onChange={handleChange}>
        <option value="">Select Category</option>
        {Object.keys(dropdownOptions).map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {form.category && (
        <select
          name="subCategory"
          value={form.subCategory}
          onChange={handleChange}
        >
          <option value="">Select Service</option>
          {dropdownOptions[form.category].map((sub) => (
            <option key={sub} value={sub}>
              {sub}
            </option>
          ))}
        </select>
      )}

      <input
        name="amount"
        type="number"
        placeholder="Enter Amount (INR)"
        value={form.amount}
        onChange={handleChange}
      />

      <button onClick={handlePayment} disabled={loading}>
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </div>
  );
};

export default PaymentDetails;
// ----------------------------------The code is from here-------------
