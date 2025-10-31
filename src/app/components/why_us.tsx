"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Jane Doe",
    text: "CodingKraqs helped me transform my coding skills. The instructors are amazing and patient!",
    img: "/images/test1.jpeg",
  },
  {
    id: 2,
    name: "Peter Kim",
    text: "I learned full-stack development from scratch — highly recommend CodingKraqs to any beginner!",
    img: "/images/test2.jpeg",
  },
  {
    id: 3,
    name: "Mary Wanjiru",
    text: "They really care about your growth. I got my first tech job thanks to their mentorship!",
    img: "/images/test3.jpeg",
  },
  {
    id: 4,
    name: "Samuel Kiptoo",
    text: "I loved their IoT and robotics lessons — very practical and well-taught. Best experience ever!",
    img: "/images/test4.jpeg",
  },
];

export default function WhyChooseUs() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-slide every 9 seconds (slower for readability)
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 9000);
    return () => clearInterval(timer);
  }, [paused]);

  const nextSlide = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section
      id="whychooseus"
      className="bg-gray-50 py-16 px-6 md:px-12 text-center text-gray-800"
    >
      {/* Title */}
      <h2 className="text-3xl font-bold mb-12">
        Why Choose <span className="text-blue-600">CodingKraqs</span>
      </h2>

      {/* 3 Feature Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all">
          <h3 className="text-xl font-semibold mb-2 text-gray-900">
            Expert Instructors
          </h3>
          <p className="text-gray-600">
            Our mentors are skilled professionals guiding students through
            hands-on tech learning experiences.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all">
          <h3 className="text-xl font-semibold mb-2 text-gray-900">
            Flexible Learning
          </h3>
          <p className="text-gray-600">
            Study from anywhere, anytime. Choose between physical and online
            sessions at your convenience.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all">
          <h3 className="text-xl font-semibold mb-2 text-gray-900">
            Career Support
          </h3>
          <p className="text-gray-600">
            We offer internship connections, interview prep, and tech job
            placement for all our graduates.
          </p>
        </div>
      </div>

      {/* Testimonials Section */}
      <h3 className="text-2xl font-semibold mb-8 text-gray-700">
        What Our Clients Say
      </h3>

      <div
        className="relative flex justify-center items-center w-full"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 md:left-10 bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 transition"
        >
          <ChevronLeft size={22} />
        </button>

        <div className="overflow-hidden w-full md:w-3/4">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 150 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -150 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {[
                testimonials[index],
                testimonials[(index + 1) % testimonials.length],
              ].map((item) => (
                <div
                  key={item.id}
                  className="flex items-center bg-white rounded-2xl shadow-md p-6 h-56"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-14 h-14 rounded-full mr-5 object-cover border border-gray-300"
                  />
                  <div className="text-left">
                    <p className="text-gray-600 italic leading-relaxed text-base">
                      "{item.text}"
                    </p>
                    <p className="text-sm text-gray-500 mt-2">– {item.name}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-0 md:right-10 bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 transition"
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </section>
  );
}
