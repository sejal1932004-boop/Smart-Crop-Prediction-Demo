import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar"; 
import AboutUs from "./AboutUs"; 
import Services from "./Services"; 
import Footer from "./Footer"; 

const Home = () => {
  return (
    <div>
      <Navbar />

      <section
        id="home"
        className="relative h-screen flex flex-col items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/images/agriculure.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10">
          <h1 className="text-5xl font-bold animate-fadeIn">
            Welcome to Agroveer
          </h1>
          <p className="mt-4 text-lg animate-fadeIn delay-500">
            Your one-stop platform for smart agriculture solutions.
          </p>

          <div className="mt-6 space-x-4">
            <Link
              to="/services"
              className="px-6 py-3 bg-green-500 hover:bg-green-700 rounded-full text-white font-semibold text-lg shadow-lg transition-all transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              to="/about"
              className="px-6 py-3 border border-white hover:bg-white hover:text-green-600 rounded-full text-white font-semibold text-lg transition-all transform hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section id="about">
        <AboutUs />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="contact">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
