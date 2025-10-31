"use client";

import Image from "next/image";
import { useState } from "react";

export default function Staff() {
  const [selectedStaff, setSelectedStaff] = useState<any>(null);

  const staffMembers = [
    {
      name: "Jane Mwangi",
      role: "AI & Robotics Instructor",
      image: "/images/staffs/mary.jpeg",
      description:
        "Jane specializes in artificial intelligence and robotics, helping students build smart, interactive systems.",
      details: {
        education: "MSc in Artificial Intelligence, University of London",
        achievements:
          "Developed 20+ AI-driven student projects, featured in TechAfrica 2023.",
        experience: "10 years teaching robotics and AI in Kenya and UK.",
      },
    },
    {
      name: "John Kamau",
      role: "Graphic Design Mentor",
      image: "/images/staffs/kamau.jpeg",
      description:
        "John brings creativity to life through design and visual communication for young innovators.",
      details: {
        education: "BA in Graphic Design, Middlesex University, London",
        achievements:
          "Awarded ‘Best Creative Educator’ by Adobe Africa in 2022.",
        experience:
          "7 years experience mentoring students in design thinking and UI/UX.",
      },
    },
    {
      name: "Naserian Njeri",
      role: "Mobile App Developer",
      image: "/images/staffs/naserian.jpeg",
      description:
        "Naserian teaches students how to design and develop mobile apps using Flutter and Android Studio.",
      details: {
        education: "BSc in Software Engineering, Strathmore University",
        achievements:
          "Created over 15 Android apps, 5 of which are live on Google Play.",
        experience:
          "6 years experience in mobile development and teaching Flutter.",
      },
    },
    {
      name: "Seedney Otieno",
      role: "Arduino & IoT Expert",
      image: "/images/staffs/seedney.jpeg",
      description:
        "Seedney inspires learners through hands-on IoT and Arduino projects for smart innovations.",
      details: {
        education: "BEng in Mechatronics, University of Nairobi",
        achievements:
          "Implemented IoT systems in smart farms and automation labs across Kenya.",
        experience:
          "8 years experience integrating IoT with automation and robotics.",
      },
    },
  ];

  return (
    <div
      id="staff"
      className="bg-white min-h-screen py-16 px-6 md:px-20 text-gray-800"
    >
      <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-12">
        Our Professionals
      </h1>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        {staffMembers.map((staff, index) => (
          <div
            key={index}
            onClick={() => setSelectedStaff(staff)}
            className="cursor-pointer bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-2 border border-gray-100"
          >
            <div className="relative w-full h-72">
              <Image
                src={staff.image}
                alt={staff.name}
                fill
                className="object-cover rounded-t-2xl"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900">{staff.name}</h2>
              <p className="text-blue-600 font-medium">{staff.role}</p>
              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                {staff.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Section */}
      {selectedStaff && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-lg shadow-lg relative">
            <button
              onClick={() => setSelectedStaff(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl font-bold"
            >
              ×
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="relative w-32 h-32 mb-4">
                <Image
                  src={selectedStaff.image}
                  alt={selectedStaff.name}
                  fill
                  className="object-cover rounded-full border-4 border-blue-500"
                />
              </div>

              <h2 className="text-2xl font-bold text-gray-900">
                {selectedStaff.name}
              </h2>
              <p className="text-blue-600 font-semibold mb-3">
                {selectedStaff.role}
              </p>

              <div className="text-left space-y-2">
                <p>
                  <strong>🎓 Education:</strong>{" "}
                  {selectedStaff.details.education}
                </p>
                <p>
                  <strong>🏆 Achievements:</strong>{" "}
                  {selectedStaff.details.achievements}
                </p>
                <p>
                  <strong>💼 Experience:</strong>{" "}
                  {selectedStaff.details.experience}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
