import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
    inquiryType: "PROJECT",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Example with EmailJS or your backend API here
    // sendEmail(formData);

    console.log("Form Submitted: ", formData);
    alert("Form submitted successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-[860px] h-[720px] md:mx-auto mx-4 p-8 md:p-10 bg-white shadow-lg shadow-[#4fc4cb] rounded-[18px] mb-[20px] relative -top-[100px]"
    >
     <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          FULL NAME: *
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full name*"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          YOUR EMAIL: *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your email*"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="message"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          MESSAGE: *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          required
          className="w-full h-[230px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
        />
      </div>

      <div className="mb-4 md:pt-5">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          TYPE OF INQUIRY
        </label>
        <div className="flex flex-col md:flex-row md:items-center space-y-1 md:space-x-4 md:space-y-0">
          <label className="flex items-center">
            <input
              type="radio"
              name="inquiryType"
              value="PROJECT"
              checked={formData.inquiryType === "PROJECT"}
              onChange={handleChange}
              className="form-radio text-teal-500"
            />
            <span className="ml-2 text-[#171b2c]">PROJECT</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="inquiryType"
              value="TRAINING"
              checked={formData.inquiryType === "TRAINING"}
              onChange={handleChange}
              className="form-radio text-teal-500"
            />
            <span className="ml-2 text-[#171b2c]">TRAINING</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="inquiryType"
              value="GENERAL"
              checked={formData.inquiryType === "GENERAL"}
              onChange={handleChange}
              className="form-radio text-teal-500"
            />
            <span className="ml-2 text-[#171b2c]">GENERAL</span>
          </label>
        </div>
      </div>

      <div className="mb-4 pt-4 md:pt-0">
        <button
          type="submit"
          className="px-6 py-3 text-white bg-[#171b2c] rounded hover:bg-[#4fc4cb] hover:text-[#171b2c]">
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
