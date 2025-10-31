"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50 text-black">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/#home"
          className="flex items-center gap-2 text-2xl font-bold text-orange-700"
          onClick={closeMenu}
        >
          <img
            src="/images/logo.jpeg"
            alt="CodingKraqs Logo"
            className="w-10 h-10 object-contain bg-orange-600 rounded-full"
          />
          CodingKraqs
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-black">
          <Link href="/" className="hover:text-orange-600">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-600">
            About
          </Link>
          <Link href="/#programs" className="hover:text-blue-600">
            Programs
          </Link>
          <Link href="/#staff" className="hover:text-blue-600">
            Staff
          </Link>
          <Link href="/#contact" className="hover:text-orange-600">
            Contact
          </Link>
          <Link
            href="/enrol"
            className="bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Enroll
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-4 space-y-4">
          <Link
            href="/"
            onClick={closeMenu}
            className="block hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={closeMenu}
            className="block hover:text-blue-600"
          >
            About
          </Link>
          <Link
            href="/#programs"
            onClick={closeMenu}
            className="block hover:text-blue-600"
          >
            Programs
          </Link>
          <Link
            href="/#staff"
            onClick={closeMenu}
            className="block hover:text-blue-600"
          >
            Our Staffs
          </Link>
          <Link
            href="/#contact"
            onClick={closeMenu}
            className="block hover:text-blue-600"
          >
            Contact
          </Link>
          <Link
            href="/register"
            onClick={closeMenu}
            className="block bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Enroll
          </Link>
        </div>
      )}
    </nav>
  );
}
