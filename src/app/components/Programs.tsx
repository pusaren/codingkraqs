"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type Course = {
  title: string;
  image: string;
  description: string;
  duration: string;
  outcomes: string[];
};

export default function Programs() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const courses: Course[] = [
    {
      title: "Artificial Intelligence",
      image: "/images/ai.jpeg",
      description:
        "Dive into the world of AI and machine learning. Learn how machines can think, analyze, and make decisions through data and algorithms.",
      duration: "12 Weeks",
      outcomes: [
        "Understand AI fundamentals",
        "Build basic machine learning models",
        "Implement AI-based solutions in real life",
      ],
    },
    {
      title: "Arduino Programming",
      image: "/images/arduino.jpeg",
      description:
        "Hands-on training with microcontrollers and sensors. Learn how to automate systems using Arduino hardware.",
      duration: "10 Weeks",
      outcomes: [
        "Control sensors and actuators",
        "Develop smart IoT systems",
        "Program Arduino boards efficiently",
      ],
    },
    {
      title: "Mobile App Development",
      image: "/images/mobile.jpeg",
      description:
        "Design and develop beautiful, responsive mobile applications using Flutter and Android Studio.",
      duration: "14 Weeks",
      outcomes: [
        "Master cross-platform app development",
        "Learn UI/UX design principles",
        "Publish your first mobile app",
      ],
    },
    {
      title: "Web Development",
      image: "/images/web.jpeg",
      description:
        "Learn to create responsive websites and web applications using modern technologies like HTML, CSS, JavaScript, and React.",
      duration: "12 Weeks",
      outcomes: [
        "Build interactive websites",
        "Work with React & Next.js",
        "Deploy and manage web applications",
      ],
    },
    {
      title: "Graphic Design",
      image: "/images/design.jpeg",
      description:
        "Learn the art of visual communication using Adobe Creative Suite. Create appealing posters, brand identities, and UI designs.",
      duration: "8 Weeks",
      outcomes: [
        "Master Adobe Photoshop & Illustrator",
        "Design professional logos and graphics",
        "Build a design portfolio",
      ],
    },
    {
      title: "Robotics & Automation",
      image: "/images/robotics.jpeg",
      description:
        "Build and program robots for industrial and personal applications. Combine mechanical and electronic systems intelligently.",
      duration: "16 Weeks",
      outcomes: [
        "Understand robotics principles",
        "Build autonomous robotic systems",
        "Integrate sensors and motors",
      ],
    },
  ];

  const plans = [
    {
      name: "Basic",
      price: "KES 3,000",
      features: [
        "Study modules only",
        "Online support",
        "Access to course materials",
      ],
      color: "from-blue-500 to-blue-700",
    },
    {
      name: "Pro",
      price: "KES 6,000",
      features: [
        "Study modules + Free Eye Checkup",
        "Priority mentorship",
        "Extra learning resources",
      ],
      color: "from-purple-500 to-purple-700",
    },
    {
      name: "Premium",
      price: "KES 9,000",
      features: [
        "Study modules + Eye Checkup + Eyewear Frame",
        "ERP Solutions Access",
        "1-on-1 mentorship sessions",
      ],
      color: "from-orange-500 to-orange-700",
    },
  ];

  return (
    <div id="programs" className="bg-gray-50 min-h-screen py-16 px-6 md:px-20">
      <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-12">
        Our Courses
      </h1>

      {/* Course Cards */}
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-xl hover:shadow-orange-500 transition-transform transform hover:-translate-y-2 border border-gray-100 cursor-pointer"
            onClick={() => setSelectedCourse(course)}
            whileHover={{ scale: 1.03 }}
          >
            <div className="relative w-full h-64">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover rounded-t-2xl"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900">
                {course.title}
              </h2>
              <p className="text-gray-600 mt-3 text-sm line-clamp-2">
                {course.description}
              </p>
              <p className="text-blue-600 mt-2 font-medium">
                Duration: {course.duration}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Course Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCourse(null)}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-4 relative overflow-y-auto max-h-[90vh]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-4 text-gray-600 hover:text-red-500 text-2xl"
                onClick={() => setSelectedCourse(null)}
              >
                &times;
              </button>

              <Image
                src={selectedCourse.image}
                alt={selectedCourse.title}
                width={800}
                height={400}
                className="rounded-xl mb-4 object-cover w-full h-64"
              />
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                {selectedCourse.title}
              </h2>
              <p className="text-gray-700 mb-4">{selectedCourse.description}</p>
              <p className="text-blue-600 font-semibold mb-3">
                Duration: {selectedCourse.duration}
              </p>

              <h3 className="text-gray-800 font-bold mb-2">
                Learning Outcomes:
              </h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-1 mb-8">
                {selectedCourse.outcomes.map((outcome, i) => (
                  <li key={i}>{outcome}</li>
                ))}
              </ul>

              {/* Pricing Plans */}
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
                Choose Your Plan
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {plans.map((plan, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    onClick={() =>
                      (window.location.href = `/enrol?plan=${plan.name}&course=${selectedCourse.title}`)
                    }
                    className={`rounded-2xl shadow-lg bg-gradient-to-br ${plan.color} text-white p-6 flex flex-col justify-between cursor-pointer hover:shadow-2xl transition`}
                  >
                    <h4 className="text-xl font-semibold mb-3 text-center">
                      {plan.name}
                    </h4>
                    <p className="text-center text-3xl font-bold mb-4">
                      {plan.price}
                    </p>
                    <ul className="text-left space-y-2 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span>✔</span> <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
