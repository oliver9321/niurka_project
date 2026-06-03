import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Especialidades from "@/components/Especialidades";
import Solutions from "@/components/Solutions";
import BMSDashboard from "@/components/BMSDashboard";
import Distributors from "@/components/Distributors";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen relative text-zinc-900" data-testid="home-page">
      {/* Subtle background gradient using logo colors (gray, teal, lime) */}
      <div className="fixed inset-0 -z-10 bg-[#f8faf6]">
        {/* Main diagonal gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B9B7A]/[0.06] via-[#f5f7f4] to-[#8DB92E]/[0.08]" />
        {/* Top-left teal glow */}
        <div className="absolute -top-[5%] -left-[5%] w-[55%] h-[55%] rounded-full bg-[#1B9B7A]/[0.07] blur-[140px]" />
        {/* Bottom-right lime glow */}
        <div className="absolute -bottom-[5%] -right-[5%] w-[50%] h-[50%] rounded-full bg-[#8DB92E]/[0.09] blur-[140px]" />
        {/* Center subtle gray warmth */}
        <div className="absolute top-[40%] left-[20%] w-[40%] h-[40%] rounded-full bg-[#7A7B81]/[0.04] blur-[120px]" />
        {/* Secondary teal accent bottom-left */}
        <div className="absolute bottom-[20%] -left-[8%] w-[35%] h-[35%] rounded-full bg-[#1B9B7A]/[0.05] blur-[100px]" />
      </div>
      <Header />
      <main id="servicios">
        <Hero />
        <Stats />
        <About />
        <Especialidades />
        <Solutions />
        <BMSDashboard />
        <Distributors />
        <Partners />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
