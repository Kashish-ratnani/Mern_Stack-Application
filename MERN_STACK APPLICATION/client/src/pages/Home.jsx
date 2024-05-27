import React from "react";
import Header from "./../components/Header";
import Hero from "../components/Hero";
import Service from "./../components/Service";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Service />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
