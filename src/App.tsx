import React from "react";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Footer />
      <Contact />
    </>
  );
}

export default App;
