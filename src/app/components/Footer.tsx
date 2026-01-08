"use client";

import Link from "next/link";
import {
  FaCogs,
  FaEnvelope,
  FaFacebook,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaUserFriends,
  FaUsers,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200 shadow-inner mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-3">
        {/* Company Info */}
        <div>
          <h2 className="text-3xl font-extrabold text-blue-600 mb-3">
            CodingKraqs
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Empowering young minds through technology, innovation, and
            creativity. Join us in shaping the next generation of digital
            creators.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-3 hover:text-blue-600 transition">
              <FaHome className="text-blue-500" /> <a href="/#hero">Home</a>
            </li>
            <li className="flex items-center gap-3 hover:text-blue-600 transition">
              <FaCogs className="text-blue-500" />{" "}
              <a href="/#programs">Programs</a>
            </li>
            <li className="flex items-center gap-3 hover:text-blue-600 transition">
              <FaUserFriends className="text-blue-500" />{" "}
              <a href="/#partners">Partners</a>
            </li>
            <li className="flex items-center gap-3 hover:text-blue-600 transition">
              <FaUsers className="text-blue-500" /> <a href="/#staff">Staff</a>
            </li>
            <li className="flex items-center gap-3 hover:text-blue-600 transition">
              <FaEnvelope className="text-blue-500" />{" "}
              <Link href="/#contact" className="hover:text-orange-600">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Follow Us
          </h3>
          <div className="flex space-x-5">
            <a href="#" className="hover:text-blue-600 transition text-2xl">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-pink-500 transition text-2xl">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-sky-500 transition text-2xl">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-red-600 transition text-2xl">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-blue-700 transition text-2xl">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-gray-100 border-t border-gray-300 text-center py-5 text-gray-600 text-sm">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-blue-600">CodingKraqs</span>. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
