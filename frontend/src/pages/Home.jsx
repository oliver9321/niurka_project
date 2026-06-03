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
    <div className="min-h-screen bg-white text-zinc-900" data-testid="home-page">
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
