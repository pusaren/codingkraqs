"use client";

import { auth, db } from "@/lib/firebaseConfig";
import emailjs from "emailjs-com";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EnrolPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    program: "",
    peopleCount: 1,
    plan: "",
    info: "",
  });

  const plans = {
    Basic: 2000,
    Pro: 3500,
    Premium: 5000,
  };

  const courses = [
    { name: "Artificial Intelligence" },
    { name: "Arduino Programming" },
    { name: "Mobile App Development" },
    { name: "Web Development" },
    { name: "Graphic Design" },
    { name: "Robotics & Automation" },
  ];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) router.push("/login");
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [router]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setLoading(true);

    try {
      const selectedAmount = plans[formData.plan as keyof typeof plans];

      // ✅ 1. Save enrollment to Firestore
      await addDoc(collection(db, "enrollments"), {
        username: user.displayName,
        email: user.email,
        fullName: formData.fullName,
        program: formData.program,
        peopleCount: formData.peopleCount,
        plan: formData.plan,
        amount: selectedAmount,
        info: formData.info,
        createdAt: serverTimestamp(),
      });

      // ✅ 2. Send confirmation email
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          fullName: formData.fullName,
          program: formData.program,
          plan: formData.plan,
          amount: selectedAmount,
          email: user.email,
          admin_email: "pusarenpeter@gmail.com",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      alert(
        `Enrollment successful! A confirmation email has been sent to ${user.email}.`
      );

      
    
    } catch (error) {
      console.error("❌ Error submitting enrollment:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!user)
    return (
      <p className="text-center mt-40 text-lg text-gray-600">Loading...</p>
    );

  return (
    <section className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4">
      <div className="bg-white shadow-lg p-8 rounded-2xl w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
          Enrollment Form
        </h1>

        <p className="text-center text-gray-600 mb-8">
          Welcome,{" "}
          <span className="font-semibold text-orange-500">
            {user.displayName || user.email}
          </span>
          ! Fill in the details below to complete your enrollment.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-black">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />

          <select
            name="program"
            value={formData.program}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg bg-white"
            required
          >
            <option value="">-- Select a Program --</option>
            {courses.map((course, idx) => (
              <option key={idx} value={course.name}>
                {course.name}
              </option>
            ))}
          </select>

          <select
            name="plan"
            value={formData.plan}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg bg-white"
            required
          >
            <option value="">-- Select Your Plan --</option>
            {Object.entries(plans).map(([plan, price]) => (
              <option key={plan} value={plan}>
                {plan} - KES {price.toLocaleString()}
              </option>
            ))}
          </select>

          <input
            type="number"
            name="peopleCount"
            min="1"
            max="50"
            placeholder="Number of People"
            value={formData.peopleCount}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />

          <textarea
            name="info"
            placeholder="Additional Information (optional)"
            rows={4}
            value={formData.info}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            {loading ? "Submitting..." : "Submit Enrollment"}
          </button>
        </form>

        <button
          onClick={() => {
            signOut(auth);
            router.push("/login");
          }}
          className="mt-6 text-sm text-red-500 hover:underline"
        >
          Logout
        </button>
      </div>
    </section>
  );
}
