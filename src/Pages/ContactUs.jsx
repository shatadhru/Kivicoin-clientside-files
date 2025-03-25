import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form submission logic, e.g., sending data to an API
    setSubmitStatus("Your message has been sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="py-8">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-brand-gold mb-2">
            Contact Us
          </h1>
          <p className="text-lg">
            We'd love to hear from you. Please fill out the form below, and we
            will get in touch with you as soon as possible.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#CCA354] p-6 rounded-xl shadow-lg text-white">
            <h2 className="text-2xl font-semibold mb-4">Our Office</h2>
            <p>
              123 Main Street,
              <br />
              Cityville, XY 12345
              <br />
              <strong>Email:</strong> contact@kivicoin.com
              <br />
              <strong>Phone:</strong> +123 456 7890
            </p>
          </div>

          <div className="bg-gray-900 border-gray-400 border-2 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Your Email"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Your Message"
                />
              </div>

              <button
                type="submit"
                className="bg-black text-white py-2 px-6 rounded-md"
              >
                Send Message
              </button>
            </form>

            {submitStatus && (
              <div className="mt-4 text-center text-green-600">
                {submitStatus}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
