"use client";

import ContactUs from "./components/ContactUs";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Partners from "./components/Partner";
import Programs from "./components/Programs";
import Staff from "./components/Staff";
import WhyChooseUs from "./components/why_us";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-white pt-16">
      <Navbar />
      <Hero />
      <Programs />
      <Staff />
      <Partners />
      <WhyChooseUs />
      <ContactUs />
    </main>
  );
}
