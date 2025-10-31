"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../components/Navbar";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeOut" as any },
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* About Page Content */}
      <main className="bg-white text-gray-800 min-h-screen pt-32 pb-20 px-6 md:px-20">
        {/* Header Section */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4">
            Empowering Future Innovators Through{" "}
            <span className="text-orange-500">Coding, Robotics & AI</span>
          </h1>
          <p className="text-gray-600 text-lg">
            📍 Established 10 Years Ago | United Kingdom
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            CodingKraqs is a leading innovation hub dedicated to empowering
            young minds through coding, robotics, and creative problem-solving.
            Founded by a passionate developer with over{" "}
            <strong>10 years of coding experience in London</strong>, we strive
            to build Africa’s next generation of tech leaders.
          </p>
        </motion.div>

        {/* Who We Are */}
        <motion.section
          className="max-w-6xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Who We Are</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            CodingKraqs is a UK-based coding company dedicated to shaping
            students in{" "}
            <strong>Coding, Robotics, and Artificial Intelligence</strong>. With
            over a decade of experience, we specialize in nurturing future-ready
            innovators by blending creativity, logic, and well-being.
          </p>
          <p className="text-gray-700 text-lg mt-4">
            We uniquely balance <strong>screen time</strong> and{" "}
            <strong>student care</strong>, ensuring technology empowers rather
            than overwhelms. Our programs merge practical coding with emotional
            and physical wellness — preparing students for success beyond the
            classroom.
          </p>
        </motion.section>

        {/* Vision & Mission */}
        <motion.section
          className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.3 }}
        >
          {/* Vision */}
          <motion.div
            className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition"
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold text-orange-500 mb-3">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To make coding, robotics, and artificial intelligence accessible,
              safe, and impactful for every learner — building a generation of
              innovators who change the world through technology.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition"
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold text-blue-700 mb-3">
              Our Mission
            </h3>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>
                Provide world-class education in coding, robotics, and AI.
              </li>
              <li>Ensure student well-being through free eye tests.</li>
              <li>
                Use eye-friendly, dim-light learning platforms promoting healthy
                vision.
              </li>
              <li>
                Create lifelong opportunities for innovation in emerging
                technologies.
              </li>
            </ul>
          </motion.div>
        </motion.section>

        {/* Eye Care Initiative */}
        <motion.section
          className="max-w-6xl mx-auto mb-16 bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-bold text-blue-700 mb-4">
            Student Eye Care Initiative
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            At CodingKraqs, we care about our students’ vision as much as their
            future. We believe that a healthy body supports a healthy mind —
            that’s why our platform integrates well-being in every lesson.
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
            <li>Free eye tests in selected study plans.</li>
            <li>Dim-light coding interface to reduce eye strain.</li>
            <li>
              Smart break reminders during robotics and programming practice.
            </li>
          </ul>
        </motion.section>

        {/* Education Model */}
        <motion.section
          className="max-w-6xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-bold text-orange-500 mb-4">
            Our Education Model
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            We follow a <strong>Trimester-Based Learning System</strong> — three
            dynamic phases each year, blending theory and real-world
            application. Each term concludes with hands-on projects that solve
            real problems.
          </p>
          <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition">
            <h4 className="text-xl font-semibold text-blue-700 mb-3">
              Curriculum Highlights
            </h4>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>🔹 Coding Fundamentals</li>
              <li>🔹 Robotics Applications</li>
              <li>🔹 Artificial Intelligence Projects</li>
            </ul>
            <p className="mt-4 text-gray-700">
              Each trimester ends with project demos, teamwork, and innovation
              challenges that prepare our learners to stand out globally.
            </p>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <Link
            href="/enrol"
            className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 shadow-lg transition"
          >
            Join the Future — Enroll Today
          </Link>
        </motion.div>
      </main>
    </>
  );
}
