import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
    inquiryType: "PROJECT",
  });

  const [successMessage, setSuccessMessage] = useState(""); // New state for success message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_vf7o9cf",
        "template_o0bcy1j",
        formData,
        "8KXiSl_TS3VqB8S1r"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccessMessage(
            "Message sent successfully, we will get back to you shortly."
          ); // Show success message
          setFormData({
            from_name: "",
            from_email: "",
            message: "",
            inquiryType: "PROJECT",
          }); // Clear form
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Form submission failed.");
        }
      );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-[860px] h-[745px] md:mx-auto mx-4 p-8 md:p-10 bg-white shadow-lg shadow-[#4fc4cb] rounded-[18px] mb-[20px] relative -top-[100px]"
    >
      <div className="mb-4">
        <label
          htmlFor="fullName"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          FULL NAME: *
        </label>
        <input
          type="text"
          id="fullName"
          name="from_name"
          value={formData.from_name}
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
          name="from_email"
          value={formData.from_email}
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

      <div className="mb-3 md:pt-5">
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

      <div className="mb-5 pt-4 md:pt-5">
        <button
          type="submit"
          className="px-6 py-3 text-white bg-[#171b2c] rounded hover:bg-[#4fc4cb] hover:text-[#171b2c]"
        >
          Send Message
        </button>
      </div>

      {successMessage && (
        <div className="mb-2 text-[#265457] font-normal text-[16px] text-center">
          {successMessage}
        </div>
      )}
    </form>
  );
};

export default ContactForm;
