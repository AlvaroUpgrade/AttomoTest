import React from "react";
import Apartaments from "../../components/Apartaments/Apartaments";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Gallery from "../../components/Gallery/Gallery";
import Header from "../../components/Header/Header";
import Installations from "../../components/Installations/Installations";
import Ubications from "../../components/Ubications/Ubications";
import "./Home.scss";

const Home = () => {
  return (
    <div>
      <Header />
      <Ubications />
      <Apartaments />
      <Installations />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
