"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const heroImages = [
  "/images/hero.jpeg",
  "/images/hero2.jpeg",
  "/images/virtual reality.jpeg",
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-grey py-16 px-6 md:px-10 relative overflow-hidden">
      <div className="max-w-lg z-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Unleash the Power of{" "}
          <span className="text-orange-500">Artificial Intelligence</span> and{" "}
          <span className="text-orange-500">Robotics</span>
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          Learn to CODE, build, and KRAQ the future with CodingKraqs — where
          creativity meets technology.
        </p>

        {/* ✅ Enroll Button navigates to /enrol */}
        <Link href="/enrol">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-orange-600 transition">
            Enroll With Us
          </button>
        </Link>
      </div>

      {/* Dynamic image container */}
      <div className="relative w-full md:w-[400px] h-[500px] mt-10 md:mt-0 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.45)] hover:scale-105 transition-transform duration-500">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[3000ms] ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img}
              alt={`Hero ${index}`}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
