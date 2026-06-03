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
      <div className="fixed inset-0 -z-10 bg-white">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1B9B7A]/[0.03] via-white to-[#8DB92E]/[0.04]" />
        <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#1B9B7A]/[0.03] blur-[120px]" />
        <div className="absolute bottom-[10%] -right-[10%] w-[45%] h-[45%] rounded-full bg-[#8DB92E]/[0.04] blur-[120px]" />
        <div className="absolute top-[60%] left-[30%] w-[30%] h-[30%] rounded-full bg-[#7A7B81]/[0.02] blur-[100px]" />
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
