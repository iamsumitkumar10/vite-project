import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header.jsx";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import Home from "./components/Home/Home.jsx";
import Footer from "./components/footer/Footer.jsx";
import Hireme from "./components/hireme/Hireme.jsx";

 

function App() {
  


  return (
    <>
      <Header />
      <Home />
      <About />
   
      <Contact />
      <Hireme />
      <Footer />
    </>
  );
}

export default App;
