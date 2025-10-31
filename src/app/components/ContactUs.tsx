"use client";

import { useState } from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";

export default function ContactUs() {
  const [formStatus, setFormStatus] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // Replace with your actual Formspree ID
      const response = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("✅ Message sent successfully!");
        form.reset();
      } else {
        setFormStatus("❌ Failed to send. Please try again.");
      }
    } catch (error) {
      setFormStatus("⚠️ Something went wrong. Please try again later.");
    }
  };

  return (
    <section
      id="contact"
      className="bg-gray-50 py-20 px-6 sm:px-10 lg:px-24 border-t border-gray-200"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 border-l-8 border-blue-600 pl-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Have questions, partnership ideas, or want to learn more about our
            programs? We’d love to hear from you. Reach out through the form or
            our communication channels below.
          </p>

          <div className="space-y-5 text-gray-700">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-blue-600 text-xl" />
              <span>info@codingkraqs.co.ke</span>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-blue-600 text-xl" />
              <span>+254 712 345 678</span>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-blue-600 text-xl" />
              <span>Kajiado, Kenya</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-8">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook className="text-2xl text-gray-700 hover:text-blue-600 transition transform hover:scale-110" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter className="text-2xl text-gray-700 hover:text-blue-400 transition transform hover:scale-110" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="text-2xl text-gray-700 hover:text-pink-500 transition transform hover:scale-110" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-2xl text-gray-700 hover:text-blue-700 transition transform hover:scale-110" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-10 shadow-2xl rounded-2xl border border-gray-100 transition hover:shadow-3xl"
        >
          <h3 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
            Send Us a Message
          </h3>

          <div className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="_replyto"
              placeholder="Your Email Address"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="Your Message..."
              rows={6}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 active:scale-95 transition transform"
            >
              Send Message
            </button>
          </div>

          {formStatus && (
            <p
              className={`mt-6 text-center font-medium ${
                formStatus.includes("successfully")
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            >
              {formStatus}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
