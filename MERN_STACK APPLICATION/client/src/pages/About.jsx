import React from "react";
import Header from "./../components/Header";
import AboutUs from "../components/AboutUs";
import Excellence from "../components/Excellence";
import Service from "../components/Service";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";

const About = () => {
  return (
    <>
      <Header />
      <AboutUs />
      <Service />
      <Excellence />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
};

export default About;
