import React from "react";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Gallery from "../components/Gallery/Gallery";
import Footer from "../components/Footer/Footer";







const Home = () => {
  return (
    <div className="app">
      <div className="marginBody conteent-wrapper">
        <Header />
        <Banner />
        <Gallery/>
      </div>
     
      <Footer/>
    </div>
  );
};

export default Home;
