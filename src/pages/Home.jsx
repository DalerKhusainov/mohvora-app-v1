// REACT
import React from "react";

// REACT COMPONENTS
import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { MobileApp } from "../components/MobileApp";
import { CTA } from "../components/CTA";
import { How } from "../components/How";
import { Footer } from "../components/Footer";

// CSS STYLES
import "../styles/home.scss";

export const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <MobileApp />
      <CTA />
      <How />
      <Footer />
    </div>
  );
};
